import {Module} from "@nestjs/common";
import {CrmService} from "./crm.service";
import {CrmController} from "./crm.controller";
import {ProfileModule} from "./profile/profile.module";

@Module({
  controllers: [CrmController],
  providers: [CrmService],
  imports: [ProfileModule],
})
export class CrmModule {}
