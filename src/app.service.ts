import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

@Injectable()
export class AppService {
  private getTemp(): string {
    const result = execSync('bash ~/check_temp.sh');
    return result.toString();
  }

  getTemperature(): string {
    return this.getTemp();
  }

  getTest(): string {
    return `Environment = ${process.env.NODE_ENV}`
  }
}
