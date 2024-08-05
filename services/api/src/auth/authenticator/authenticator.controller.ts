import {Body, Controller, Post, Request, UseGuards} from "@nestjs/common";
import {AuthenticatorService} from "./authenticator.service";
import {LoginDto, RefreshDto} from "./dto";
import {RefreshGuard} from "./guards/refresh.guard";

@Controller("/auth/authenticator")
export class AuthenticatorController {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  @Post("login")
  async login(@Body() loginDTO: LoginDto) {
    return await this.authenticatorService.login(loginDTO);
  }

  @UseGuards(RefreshGuard)
  @Post("refresh")
  async refresh(@Request() request, @Body() refreshDTO: RefreshDto) {
    return await this.authenticatorService.refresh(request, refreshDTO);
  }
}
