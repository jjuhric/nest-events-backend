import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

@Injectable()
export class AppService {
  private async getTemp() {
    const result = execSync('bash ~/check_temp.sh');
    console.log(result.toString());
    return result.toString();

  }

  async getTemperature() {
    return await this.getTemp();
  }
  getBye(): string {
    return "Bye";
  }
}
