import {Module} from "@nestjs/common";
import {RegistrationModule} from "./registration/registration.module";
import {AuthController} from "./auth.controller";
import {AuthenticatorModule} from "./authenticator/authenticator.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthGuard} from "./guards";
import {APP_GUARD} from "@nestjs/core";

@Module({
  imports: [
    RegistrationModule,
    AuthenticatorModule,
    JwtModule.register({
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
