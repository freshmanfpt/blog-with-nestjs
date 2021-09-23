import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [TypeOrmModule.forRoot(),
            AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connecttion: Connection){

  }
}
