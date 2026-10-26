import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { AdminModule } from '../admin/admin.module.js';

@Module({
  controllers: [UsersController],
  imports: [AdminModule],
  providers: [UsersService],
})
export class UsersModule {}
