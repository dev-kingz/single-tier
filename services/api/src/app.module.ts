import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "./database/database.module";
import {ModelsModule} from "./models/models.module";
import {AuthModule} from "./auth/auth.module";
import {IsUniqueConstraint} from "./validators/is-unique";
import {ExistsConstraint} from "./validators/exists";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ModelsModule,
    // <------------ APP MODULES ------------>
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, IsUniqueConstraint, ExistsConstraint],
})
export class AppModule {}
