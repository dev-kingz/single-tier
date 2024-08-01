import {Global, Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import models from "./constants/models";

@Global()
@Module({
  imports: [MongooseModule.forFeature(models)],
  exports: [MongooseModule],
})
export class ModelsModule {}
