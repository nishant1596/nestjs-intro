import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service.js';
import {CreateUserDto} from './dtos/create-user.dto.js'
import { ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetUsersParamDto, GetUsersQueryDto } from './dtos/get-users-param.dto.js';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Get()
  @ApiOperation({ summary: 'Find all users',  })
  findAll() {
    return this.usersService.findAll();
  }

  @ApiTags('create-user')
  @Post('create-user')
  createUser (@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }
  // @Get('{/:id}')
  // findOneById(@Param('id') id: string, @Query() query: any) {
  //   console.log('Query Params:', query);
  //   return this.usersService.findOne(+id);
  // }
  @Get(':id/:name')
  @ApiOperation({ summary: 'Find a user by ID and name',  })
  @ApiQuery({ name: 'age', required: true, description: 'Age of the user', example: 25 })
  findOne(@Param() getUsersParamDto: GetUsersParamDto, @Query() query: GetUsersQueryDto) {
    return this.usersService.findOne(getUsersParamDto?.name, getUsersParamDto?.id, query);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
