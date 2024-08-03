import {BadRequestException, Injectable, ServiceUnavailableException} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";

@Injectable()
export class RegistrationService {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const {name, username, email, password} = createUserDto;

      // Create a new User document
      const user = await this.userModel.create({
        name,
        username,
        email,
        password,
      });

      return {
        user,
      };
    } catch (error) {
      if (error.name === "ValidationError") {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }
}
