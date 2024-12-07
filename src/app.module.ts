import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { Event } from './events/event.entity';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_TARGET,
    username: process.env.DB_USER,
    password: process.env.DB_PASS, // Change per env
    entities: [Event],
    synchronize: process.env.NODE_ENV !== 'production', // ONLY use this for development
  }),
    EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
