import {Module} from "@nestjs/common";
import {RegistrationModule} from "./registration/registration.module";
import {AuthController} from "./auth.controller";
import {AuthenticatorModule} from "./authenticator/authenticator.module";

@Module({
  imports: [RegistrationModule, AuthenticatorModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
