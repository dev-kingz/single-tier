import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.NODE_ENV === "production" ? 4000 : 4001;
  const appName = process.env.APP_NAME;

  // Use the retrieved configuration values
  await app.listen(port);
  console.log(`${appName} is running on: ${await app.getUrl()}`);
}
bootstrap();
