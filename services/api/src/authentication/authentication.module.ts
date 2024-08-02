import {Module} from "@nestjs/common";
import {RegistrationModule} from "./registration/registration.module";
import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [RegistrationModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
