import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [TypeOrmModule.forRoot(),
            AdminModule,
            UserModule,
            CategoryModule,
            BlogModule,
            CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){

  }
}
