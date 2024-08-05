import {BadRequestException, Injectable, ServiceUnavailableException} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

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

      const payload = {
        user: {
          id: user._id,
        },
      };

      // Remove the password from the user object
      user.password = undefined;

      // Check for the stayLoggedIn flag
      const expiresIn = "1d";

      return {
        user,
        tokens: {
          accessToken: await this.jwtService.signAsync(payload, {
            expiresIn,
            secret: process.env.JWT_SECRET,
          }),
          refreshToken: await this.jwtService.signAsync(payload, {
            expiresIn: "7d",
            secret: process.env.JWT_REFRESH_TOKEN,
          }),
        },
      };
    } catch (error) {
      if (error.name === "ValidationError") {
        throw new BadRequestException(error.errors);
      }
      throw new ServiceUnavailableException();
    }
  }
}
