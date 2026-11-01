import { Body, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/posts.dto.js';
import {InjectRepository } from "@nestjs/typeorm"
import { Post } from './entities/post.entity.js';
import {Repository} from "typeorm";

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {}
  async createPost(@Body() createPostDto: CreatePostDto) {
    const newPost = await this.postsRepository.save(createPostDto);
    console.log('New Post Created:', newPost);
    return newPost;
  }
}
