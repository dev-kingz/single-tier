import {Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import {LoginDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {PERSONALINFO_MODEL, PersonalInfoDocument} from "src/models/schemas/personalInfo";
import {AccountDocument} from "src/models/schemas/account";

@Injectable()
export class AuthenticatorService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    @InjectModel(PERSONALINFO_MODEL)
    private readonly personalInfoModel: Model<PersonalInfoDocument>,
  ) {}

  async login(loginDTO: LoginDto) {
    const {email, password} = loginDTO;

    // Find the personalInfo document by email
    const personalInfo = await this.personalInfoModel.findOne({email});

    // Find the user document by personalInfo
    const user = await this.userModel
      .findOne({_id: personalInfo.user})
      .populate("account", "+password")
      .populate({path: "profile", populate: {path: "personalInfo", select: {user: 0}}});

    if (!user || !user.account) {
      console.log("User not found");
      throw new NotFoundException("User not found");
    }

    // Type assertion to inform TypeScript that user.account is an AccountDocument
    const account = user.account as AccountDocument;

    // Compare the passwords
    const isPasswordMatch = await bcrypt.compare(password, account.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Remove the password from the account document
    account.password = undefined;

    return user;
  }
}
