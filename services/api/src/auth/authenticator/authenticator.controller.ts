import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';
import { LoginDto } from './dto';

@Controller('/auth/authenticator')
export class AuthenticatorController {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDto) {
    return this.authenticatorService.login(loginDTO);
  }
}
