import {Injectable, UnauthorizedException} from "@nestjs/common";
import {LoginDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import {Request, Response} from "express";

@Injectable()
export class AuthenticatorService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDto, request: Request, response: Response) {
    // check if the user is already logged in by checking the cookie
    if (request.cookies["accessToken"]) throw new UnauthorizedException("User already logged in!");

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

    const payload = {
      user: {
        id: user._id,
      },
    };
    if (!stayLoggedIn) stayLoggedIn = false;

    // Check for the stayLoggedIn flag
    const expiresIn = stayLoggedIn ? "7d" : "20s";

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn,
      secret: process.env.JWT_SECRET,
    });

    response.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return {
      message: "Login successful!",
    };
  }

  async logout(response: Response) {
    response.clearCookie("accessToken");

    return {
      message: "Logout successful!",
    };
  }

  async getSession(request: Request) {
    const user = request["user"];

    return user;
  }
}
