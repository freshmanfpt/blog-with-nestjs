import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Comment } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
@Module({
    imports: [ TypeOrmModule.forFeature([Blog,User,Comment]),],
    controllers :[CommentController],
    providers: [CommentService],
})
export class CommentModule {}