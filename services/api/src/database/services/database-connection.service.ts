// import {Injectable} from "@nestjs/common";
// import {ConfigService} from "@nestjs/config";
// import {MongooseOptionsFactory, MongooseModuleOptions} from "@nestjs/mongoose";

// @Injectable()
// export class DatabaseConnectionService implements MongooseOptionsFactory {
//   constructor(private config: ConfigService) {}

//   createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
//     const appName = this.config.get("APP_NAME");
//     const username = this.config.get("DATABASE_USER");
//     const password = this.config.get("DATABASE_PASSWORD");
//     const host = this.config.get("DATABASE_HOST");
//     const db = this.config.get("DATABASE_NAME");

//     const uri = `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority&appName=${appName}`;

//     return {
//       uri,
//     };
//   }
// }
