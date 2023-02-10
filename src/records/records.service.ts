import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from '../entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) {}

  create(createRecordDto: CreateRecordDto): Promise<Record> {
    const record = new Record();
    record.remark = createRecordDto.remark;
    record.amount = createRecordDto.amount;
    record.type = createRecordDto.type;
    record.createdDate = createRecordDto.createdDate;
    record.uid = createRecordDto.uid;

    return this.recordsRepository.save(record);
  }

  async findAll(): Promise<Record[]> {
    return this.recordsRepository.find();
  }

  async remove(no: string): Promise<void> {
    await this.recordsRepository.delete(no);
  }
}
