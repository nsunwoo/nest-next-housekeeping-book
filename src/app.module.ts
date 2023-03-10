import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
