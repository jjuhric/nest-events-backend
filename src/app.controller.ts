import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/temp')
  getTemperature(): any {
    return this.appService.getTemperature();
  }

  @Get('/test')
  getTest() {
    return this.appService.getTest();
  }
}
