import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { AnotherModule } from './another/another.module.js';
import { AdminModule } from './admin/admin.module.js';
import { AnimalsModule } from './animals/animals.module.js';
import { PostsModule } from './posts/posts.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    AnotherModule,
    AdminModule,
    AnimalsModule,
    PostsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mmmm',
        database: 'nestjs-blog',
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
