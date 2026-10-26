import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service.js';

@Injectable()
export class UsersService {
  constructor(private adminService: AdminService) {}

  findAll() {
    return `This action returns all users + ${this.adminService.test()}`;
  }

  findOne(name?: string, id?: number,  query?: any) {
    console.log('Query Params:', query?.age);
    return `This action returns a #${id} and ${name} user ${query?.age ? 'with age ' + query.age : ''}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
