import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {RegistrationService} from "./registration.service";
import {Public} from "../decorators/public.decorator";

@Controller("/auth/registration")
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Public()
  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.registrationService.register(createUserDto);
  }
}
