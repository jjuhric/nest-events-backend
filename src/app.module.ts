import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'nest_events',
    username: 'root',
    password: 'example', // Change per env
    entities: [Event],
    synchronize: true, // ONLY use this for development
  }),
    EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
