import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'postgres',
  database: 'housekeeping_book',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
