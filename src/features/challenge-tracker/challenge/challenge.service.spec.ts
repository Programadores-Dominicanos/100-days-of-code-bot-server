import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeService } from './challenge.service';
import { getModelToken } from '@nestjs/mongoose';
import { Challenge } from './schemas/challenge.schema';
import { ParticipantService } from '../participant/participant.service';
import { DiscordProxyService } from '../../discord-proxy/discord-proxy.service';

describe('ChallengeService', () => {
  let service: ChallengeService;

  const mockChallengeModel = {
    // Add mock methods as needed
  };

  const mockParticipantService = {
    // Add mock methods as needed
  };

  const mockDiscordProxyService = {
    // Add mock methods as needed
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChallengeService,
        {
          provide: getModelToken(Challenge.name),
          useValue: mockChallengeModel,
        },
        {
          provide: ParticipantService,
          useValue: mockParticipantService,
        },
        {
          provide: DiscordProxyService,
          useValue: mockDiscordProxyService,
        },
      ],
    }).compile();

    service = module.get<ChallengeService>(ChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
