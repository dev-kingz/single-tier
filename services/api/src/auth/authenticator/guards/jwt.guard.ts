import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Request} from "express";

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromRequest(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      request["user"] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromRequest(request: Request) {
    const authHeader = request.headers.authorization;
    if (!authHeader) return undefined; // Return undefined if the header is missing

    const [type, token] = authHeader.split(" ");

    return type === "Bearer" ? token : undefined;
  }
}
