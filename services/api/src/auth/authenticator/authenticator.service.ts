import {Injectable, UnauthorizedException} from "@nestjs/common";
import {LoginDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthenticatorService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDto) {
    const {email, password} = loginDTO;

    // Find the user document by profile
    const user = await this.userModel.findOne({email}).select("+password");

    // Compare the passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Remove the password from the account document
    user.password = undefined;

    return user;
  }
}
