import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeService } from './challenge.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ChallengeService', () => {
  let service: ChallengeService;

  const mockChallengeModel = {
    // Add mock methods as needed
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChallengeService,
        {
          provide: getModelToken('Challenge'),
          useValue: mockChallengeModel,
        },
      ],
    }).compile();

    service = module.get<ChallengeService>(ChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
