import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { AdminService } from '../admin/admin.service.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AdminService],
})
export class UsersModule {}
