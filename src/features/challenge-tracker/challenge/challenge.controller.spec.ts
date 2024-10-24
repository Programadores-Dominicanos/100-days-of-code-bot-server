import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { getModelToken } from '@nestjs/mongoose';
import { Challenge } from './schemas/challenge.schema';
import { ParticipantService } from '../participant/participant.service';
import { DiscordProxyService } from '../../discord-proxy/discord-proxy.service';

describe('ChallengeController', () => {
  let controller: ChallengeController;
  let mockChallengeService: Partial<ChallengeService>;
  let mockParticipantService: Partial<ParticipantService>;
  let mockDiscordProxyService: Partial<DiscordProxyService>;

  beforeEach(async () => {
    mockChallengeService = {
      // Add mock methods here if needed
    };

    mockParticipantService = {
      // Add mock methods here if needed
    };

    mockDiscordProxyService = {
      // Add mock methods here if needed
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [
        {
          provide: ChallengeService,
          useValue: mockChallengeService,
        },
        {
          provide: ParticipantService,
          useValue: mockParticipantService,
        },
        {
          provide: DiscordProxyService,
          useValue: mockDiscordProxyService,
        },
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
