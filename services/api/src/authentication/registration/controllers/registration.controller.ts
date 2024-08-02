import {Controller, Get} from "@nestjs/common";

@Controller("registration")
export class RegistrationController {
  @Get()
  getHello(): string {
    return "Hello from Registration Controller";
  }
}
