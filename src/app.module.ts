import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetterSqlite3ConnectionOptions } from 'typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';

const config: BetterSqlite3ConnectionOptions = {
  type: 'better-sqlite3',
  database: '../db',
  entities: [Post],
  synchronize: true,
};

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
