import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Event])],
    controllers: [EventsController],
})
export class EventsModule { }
