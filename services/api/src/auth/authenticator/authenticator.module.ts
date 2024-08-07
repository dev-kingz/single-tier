import {Module} from "@nestjs/common";
import {AuthenticatorService} from "./authenticator.service";
import {AuthenticatorController} from "./authenticator.controller";

@Module({
  controllers: [AuthenticatorController],
  providers: [AuthenticatorService],
})
export class AuthenticatorModule {}
