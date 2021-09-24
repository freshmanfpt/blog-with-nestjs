import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from 'src/admin/admin.module';
import { Admin } from 'src/entity/admin.entity';
import { Blog } from 'src/entity/blog.entity';
import { Category } from 'src/entity/category.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
@Module({
    imports: [ TypeOrmModule.forFeature([Blog,Admin,Category]),],
    controllers :[BlogController],
    providers: [BlogService],
})
export class BlogModule {}