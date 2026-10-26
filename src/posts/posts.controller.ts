import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service.js';
import { CreatePostDto } from './dtos/posts.dto.js';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return 'post created';
  }
}
