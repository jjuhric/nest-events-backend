import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'nest_events',
    username: 'root',
    password: 'example',
    entities: [Event],
    synchronize: true // ONLY use this for development
  })],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
