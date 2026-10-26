import { IsEmail, IsOptional, IsString, Matches, MinLength } from "class-validator";
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CreateUserDto { 

  @IsString()
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Last name must be at least 3 characters long' })
  lastName: string;

  @IsEmail({},{ message: 'Please enter a valid email address' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?:[\s\S]{0,7}|(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,})$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' })
  password: string;
}