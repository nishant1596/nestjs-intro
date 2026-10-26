import { Module } from '@nestjs/common';
import { AnotherService } from './another.service.js';
import { AdminService } from '../admin/admin.service.js';
import { AnotherController } from './another.controller.js';
import { AdminModule } from '../admin/admin.module.js';

@Module({
  imports: [AdminModule],
  providers: [AnotherService],
  controllers: [AnotherController],
})
export class AnotherModule {}
