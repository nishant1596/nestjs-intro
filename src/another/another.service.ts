import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service.js';

@Injectable()
export class AnotherService {
    constructor(private adminService: AdminService) {}
     anotherRoute(){
            return `This is another route + ${this.adminService.test()}`;
        }
}
