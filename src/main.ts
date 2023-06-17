import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Nest.JS Starter')
    .setDescription('A Nest.JS Starter Project')
    .setVersion('1.0')
    .addTag('starter')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  await app.listen(3000)
}
bootstrap()
