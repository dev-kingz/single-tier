import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {AuthenticatorService} from "./authenticator.service";
import {LoginDto} from "./dto";
import {Public} from "../decorators/public.decorator";
import {Request, Response} from "express";

@Controller("/auth/authenticator")
export class AuthenticatorController {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  @Public()
  @Post("login")
  async login(
    @Body() loginDTO: LoginDto,
    @Req() request: Request,
    @Res({passthrough: true}) response: Response,
  ) {
    return await this.authenticatorService.login(loginDTO, request, response);
  }

  @Post("logout")
  async logout(@Res({passthrough: true}) response: Response) {
    return await this.authenticatorService.logout(response);
  }

  @Get()
  async getSession(@Req() request: Request) {
    return await this.authenticatorService.getSession(request);
  }
}
