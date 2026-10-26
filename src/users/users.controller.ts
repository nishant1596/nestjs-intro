import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service.js';
import {CreateUserDto} from './dtos/create-user.dto.js'
import { ValidationPipe } from '@nestjs/common';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create-user')
  create (@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log('Create User DTO request:', createUserDto);
    return 'A new user is created'
  }
  // @Get('{/:id}')
  // findOneById(@Param('id') id: string, @Query() query: any) {
  //   console.log('Query Params:', query);
  //   return this.usersService.findOne(+id);
  // }
  @Get('{/:id}/:name')
  findOne(@Param('id', ParseIntPipe) id: number, @Param('name') name: string, @Query() query: any) {
    return this.usersService.findOne(id, name, query);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
