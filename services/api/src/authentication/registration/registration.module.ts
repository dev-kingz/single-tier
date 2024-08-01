import {Module} from "@nestjs/common";
import {RegistrationController} from "./controllers";

@Module({
  controllers: [RegistrationController],
})
export class RegistrationModule {}
