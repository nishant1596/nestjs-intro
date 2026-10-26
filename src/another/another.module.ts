import { Module } from '@nestjs/common';
import { AnotherService } from './another.service.js';
import { AdminService } from '../admin/admin.service.js';
import { AnotherController } from './another.controller.js';

@Module({
  providers: [AnotherService, AdminService],
  controllers: [AnotherController],
})
export class AnotherModule {}
