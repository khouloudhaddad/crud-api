import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({id:id});
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const oldPost = await this.findOne(id);
    oldPost.title = updatePostDto.title;
    return this.postRepository.save(oldPost);
  }

  async remove(id: number) {
    const oldPost = await this.findOne(id);
    return this.postRepository.remove(oldPost);
  }
}
