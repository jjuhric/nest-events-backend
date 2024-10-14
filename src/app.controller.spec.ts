import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello Jeffery\'s World!"', () => {
      expect(appController.getHello()).toBe('Hello Jeffery\'s World!');
    });
  });

  describe('/bye', () => {
    it('should return "Bye"', () => {
      expect(appController.getBye()).toBe('Bye');
    });
  })
});
