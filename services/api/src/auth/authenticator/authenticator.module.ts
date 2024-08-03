import {Module} from "@nestjs/common";
import {AuthenticatorService} from "./authenticator.service";
import {AuthenticatorController} from "./authenticator.controller";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [AuthenticatorController],
  providers: [AuthenticatorService, JwtService],
})
export class AuthenticatorModule {}
