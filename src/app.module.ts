import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_TARGET,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [Event],
    synchronize: process.env.NODE_ENV === 'production' ? false : true, // ONLY use this for development
  }),
  TypeOrmModule.forFeature([Event])],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
