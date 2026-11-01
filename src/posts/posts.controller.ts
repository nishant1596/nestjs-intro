import { Body, Controller, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service.js';
import { CreatePostDto } from './dtos/posts.dto.js';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create-post')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Patch()
  updatePost(@Body() updatePostDto: CreatePostDto) {
    return 'post updated';
  }
}
