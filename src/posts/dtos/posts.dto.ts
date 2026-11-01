import { IsEnum, IsOptional, IsString, MinLength, IsISO8601, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { PostStatus, PostType } from '../enums/posts.enum.js';
import { Type } from 'class-transformer';

class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}

export class CreatePostDto {

  @IsNotEmpty()
  userId: number;

  @IsString()
  @MinLength(3, { message: 'Title must be at least 5 characters long' })
  title: string;

  @IsEnum(PostType, { message: 'Invalid post type' })
  postType: PostType;

  @IsString()
  slug: string;

  @IsEnum(PostStatus, { message: 'Invalid post status' })
  status: PostStatus;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  schema?: string;

  @IsString()
  @IsOptional()
  featuredImageUrl?: string;

  @IsISO8601({
  })  
  @IsOptional()
  publishedOn?: Date;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[];
}