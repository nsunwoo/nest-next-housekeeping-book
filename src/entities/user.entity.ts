import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Record } from './record.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({ unique: true })
  kakaoId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @OneToMany(() => Record, (record) => record.uid)
  records: Record[];
}
