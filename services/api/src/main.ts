import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }
  ));

  // Retrieve the configuration values
  const base_url = process.env.BASE_URL;
  const port = process.env.NODE_ENV === "production" ? 4000 : 4001;
  const appName = process.env.APP_NAME;

  // Use the retrieved configuration values
  await app.listen(port);
  console.log(`\n${appName} is running on: ${base_url}:${port}\n`);
}
bootstrap();
