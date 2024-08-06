import {Module} from "@nestjs/common";
import {CrmService} from "./crm.service";
import {CrmController} from "./crm.controller";
import {ProfileModule} from "./profile/profile.module";
import { AccountModule } from './account/account.module';

@Module({
  controllers: [CrmController],
  providers: [CrmService],
  imports: [ProfileModule, AccountModule],
})
export class CrmModule {}
