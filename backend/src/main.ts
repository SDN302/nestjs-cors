import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {origin: process.env.ORIGIN, optionsSuccessStatus: 200}});
  await app.listen(3000);
}
bootstrap();
