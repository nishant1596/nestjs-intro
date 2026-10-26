import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service.js';
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Get()
    getAdmin() {
        return this.adminService.test();
    }
}
