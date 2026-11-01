import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { AdminModule } from '../admin/admin.module.js';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';

@Module({
  controllers: [UsersController],
  imports: [AdminModule, TypeOrmModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}
