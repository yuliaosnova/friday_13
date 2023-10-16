import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  //   app.enableCors({
  //     credentials: true,
  //     origin: 'http://localhost:5173',
  //   });
  await app.listen(3001);
}
bootstrap();
