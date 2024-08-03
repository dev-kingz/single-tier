import {BadRequestException, Injectable, ServiceUnavailableException} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {Model} from "mongoose";
import {ACCOUNT_MODEL, AccountDocument} from "src/models/schemas/account";
import {PROFILE_MODEL, ProfileDocument} from "src/models/schemas/profile";
import {PERSONALINFO_MODEL, PersonalInfoDocument} from "src/models/schemas/personalInfo";

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    @InjectModel(ACCOUNT_MODEL) private readonly accountModel: Model<AccountDocument>,
    @InjectModel(PROFILE_MODEL) private readonly profileModel: Model<ProfileDocument>,
    @InjectModel(PERSONALINFO_MODEL)
    private readonly personalInfoModel: Model<PersonalInfoDocument>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      // Create a new User document
      const user = await this.userModel.create({});

      // Create a new Account document
      const account = await this.accountModel.create({
        user: user._id,
        password: createUserDto.password,
      });

      // Create a new PersonalInfo document
      const personalInfo = await this.personalInfoModel.create({
        name: createUserDto.name,
        email: createUserDto.email,
      });

      // Create a new Profile document
      const profile = await this.profileModel.create({
        user: user._id,
        username: createUserDto.username,
        personalInfo: personalInfo._id,
      });

      // Update the User document with the Account and Profile references with populated fields with also populating personalInfo inside profile
      const updatedUser = await this.userModel
        .findByIdAndUpdate(user._id, {account: account._id, profile: profile._id}, {new: true})
        .populate("account")
        .populate({path: "profile", populate: "personalInfo"});

      return updatedUser;
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.name === "ValidationError") {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }
}
