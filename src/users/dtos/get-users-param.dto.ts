import {IsOptional, IsString, IsInt } from 'class-validator';
import {Type} from 'class-transformer';

export class GetUsersParamDto {
  @Type(() => Number)
  @IsInt()
  @IsOptional({message: 'ID is optional'})
  id?: number;

  @IsString()
  name: string;
}

export class GetUsersQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  age: number;
}
