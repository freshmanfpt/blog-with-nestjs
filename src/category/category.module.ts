import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { Category } from 'src/entity/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
@Module({
    imports: [TypeOrmModule.forFeature([Category,Admin,Category])],
    controllers :[CategoryController],
    providers: [CategoryService,],
})
export class CategoryModule {}