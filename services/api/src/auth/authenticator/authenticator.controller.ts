import { Controller, Post } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';
import { LoginDto } from './dto/login.dto';

@Controller('/auth/authenticator')
export class AuthenticatorController {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  @Post('login')
  async login(loginDTO: LoginDto) {
    return this.authenticatorService.login(loginDTO);
  }
}
