import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {useContainer} from "class-validator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // wrap AppModule with UseContainer
  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  // Retrieve the configuration values
  const base_url = process.env.BASE_URL;
  const port = process.env.NODE_ENV === "production" ? 4000 : 4001;
  const appName = process.env.APP_NAME;

  app.enableCors({
    origin: process.env.ORIGIN,
  });

  // Use the retrieved configuration values
  await app.listen(port);
  console.log(`\n${appName} is running on: ${base_url}:${port}\n`);
}
bootstrap();
