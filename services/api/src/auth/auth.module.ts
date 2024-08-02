import {Module} from "@nestjs/common";
import {RegistrationModule} from "./registration/registration.module";
import { AuthController } from './auth.controller';

@Module({
  imports: [RegistrationModule],
  controllers: [AuthController],
})
export class AuthModule {}
