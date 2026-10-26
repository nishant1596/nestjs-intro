import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { AdminService } from './admin/admin.service.js';
import { AnotherModule } from './another/another.module.js';

@Module({
  imports: [
    UsersModule,
    AnotherModule,
  ],
  controllers: [AppController],
  providers: [AppService, AdminService],
})
export class AppModule {}
