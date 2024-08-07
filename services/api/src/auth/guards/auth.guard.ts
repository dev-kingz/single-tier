import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Request} from "express";
import {IS_PUBLIC_KEY} from "../decorators/public.decorator";
import {Reflector} from "@nestjs/core";
import {InjectModel} from "@nestjs/mongoose";
import {USER_MODEL, UserDocument} from "src/models/schemas/user";
import {Model} from "mongoose";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // 💡 See this condition
      return true;
    }

    const request = context.switchToHttp().getRequest();

    try {
      const accessToken = this.extractTokenFromRequest(request);
      if (!accessToken) {
        throw new UnauthorizedException();
      }

      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: process.env.JWT_SECRET,
      });

      // Throw an error if the expiry date is less than the current date
      const expiryDate = new Date(payload.exp * 1000);
      if (new Date() > expiryDate) {
        throw new UnauthorizedException();
      }

      // Get the user document from the database
      const user = await this.userModel.findById(payload.user.id).select("-password");

      if (!user) {
        throw new UnauthorizedException();
      }

      request["user"] = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromRequest(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
