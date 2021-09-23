import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { Blog } from 'src/entity/blog.entity';
import { Category } from 'src/entity/category.entity';
import { Comment } from 'src/entity/comment.enity';
import { User } from 'src/entity/user.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
@Module({
    imports: [TypeOrmModule.forFeature([Admin,Blog,Category,Comment,User])],
    controllers :[AdminController],
    providers: [AdminService,],
    exports:[TypeOrmModule]
})
export class AdminModule {}