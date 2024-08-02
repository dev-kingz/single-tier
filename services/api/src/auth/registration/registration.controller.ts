import {Controller, Get} from "@nestjs/common";

@Controller("/auth/registration")
export class RegistrationController {
  @Get()
  getHello(): string {
    return "Hello from Registration Controller";
  }
}
