import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { Event } from 'src/event.entity';
export default registerAs(
  'orm-config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_TARGET,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [Event],
    synchronize: true, // ONLY use this for development
  }),
);
