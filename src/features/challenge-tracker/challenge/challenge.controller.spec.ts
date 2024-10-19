import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { getModelToken } from '@nestjs/mongoose';
import { Challenge } from './schemas/challenge.schema';

describe('ChallengeController', () => {
  let controller: ChallengeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [
        ChallengeService,
        {
          provide: getModelToken(Challenge.name),
          useValue: {}, // Mock the ChallengeModel
        },
      ],
    }).compile();

    controller = module.get<ChallengeController>(ChallengeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
