import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsService } from './records.service';
import { Record } from '../entities/record.entity';
import { RecordsController } from './records.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordsService],
  controllers: [RecordsController],
})
export class RecordsModule {}
