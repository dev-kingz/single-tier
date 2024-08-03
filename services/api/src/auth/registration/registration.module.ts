import {Module} from "@nestjs/common";
import {RegistrationController} from "./registration.controller";
import {RegistrationService} from "./registration.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService, JwtService],
})
export class RegistrationModule {}
