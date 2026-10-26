import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up global validation pipe
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))

  /**
   * Setting up swagger UI
   */
  const config = new DocumentBuilder()
  .setOpenAPIVersion('3.2.0')
  .setVersion('1.0')
  .setTitle('NestJS Intro')
  .setBasePath('/api')
  .addTag('NestJs')
  .setDescription('This is a simple NestJS project to learn the basics of NestJS')
  .addSecurity('bearer', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  })
  .addServer('http://localhost:3000', 'Local server')
  .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Start the server
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
