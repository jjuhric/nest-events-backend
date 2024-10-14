import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Jeffery\'s World!';
  }
  getBye(): string {
    return "Bye";
  }
}
