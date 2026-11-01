import { Body, Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service.js';
import { User } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private adminService: AdminService, 
    @InjectRepository(User)
    private usersRepository: Repository<User>) {}

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

  async createUser(@Body() createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({ where: { email: createUserDto.email } });
    if(existingUser) {
      console.log('User with this email already exists:', existingUser);
      return null; // or throw an error, depending on your application's needs  
    }
    const newUser = !existingUser ? await this.usersRepository.save(createUserDto) : null;
    console.log('nish ', newUser);
    return newUser;
  }
}
