import {Injectable, UnauthorizedException} from "@nestjs/common";
import {LoginDto, RefreshDto} from "./dto";
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
    let {stayLoggedIn} = loginDTO;

    // Find the user document by profile
    const user = await this.userModel.findOne({email}).select("+password");

    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Compare the passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Remove the password from the account document
    user.password = undefined;

    const payload = {
      user: {
        id: user._id,
      },
    };

    if (!stayLoggedIn) stayLoggedIn = false;

    // Check for the stayLoggedIn flag
    const expiresIn = stayLoggedIn ? "7d" : "1d";
    const expiresInMs = stayLoggedIn ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

    return {
      user,
      tokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: "1d",
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn,
          secret: process.env.JWT_REFRESH_TOKEN,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + expiresInMs),
        stayLoggedIn,
      },
    };
  }

  async refresh(user: any, refreshDTO: RefreshDto) {
    const payload = {
      user: {
        id: user.id,
      },
    };

    let {stayLoggedIn} = refreshDTO;

    if (!stayLoggedIn) stayLoggedIn = false;

    // Check for the stayLoggedIn flag
    const expiresIn = stayLoggedIn ? "7d" : "1d";
    const expiresInMs = stayLoggedIn ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

    return {
      tokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: "1d",
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn,
          secret: process.env.JWT_REFRESH_TOKEN,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + expiresInMs),
        stayLoggedIn,
      },
    };
  }
}
