import {Global, Module} from "@nestjs/common";
import {DatabaseConnectionService} from "./services";
import {MongooseModule} from "@nestjs/mongoose";

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
  ],
  providers: [MongooseModule],
})
export class DatabaseModule {}
