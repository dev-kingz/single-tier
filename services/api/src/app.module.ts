import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./database/database.module";
import {ModelsModule} from "./models/models.module";
import {AuthModule} from "./auth/auth.module";
import {IsUniqueConstraint} from "./validators/is-unique";
import {ExistsConstraint} from "./validators/exists";
import {RequestContextModule} from "nestjs-request-context";
import { CrmModule } from './crm/crm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ModelsModule,
    RequestContextModule,
    // <------------ APP MODULES ------------>
    AuthModule,
    CrmModule,
  ],
  controllers: [AppController],
  providers: [AppService, IsUniqueConstraint, ExistsConstraint],
})
export class AppModule {}
