import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';
import { DiscordProxyService } from '../../discord-proxy/discord-proxy.service';
import { Client } from 'discord.js';

describe('ParticipantController', () => {
  let controller: ParticipantController;
  let mockParticipantService: Partial<ParticipantService>;
  let mockDiscordProxyService: Partial<DiscordProxyService>;
  let mockDiscordClient: Partial<Client>;

  beforeEach(async () => {
    mockParticipantService = {
      // Add mock methods here if needed
    };

    mockDiscordProxyService = {
      // Add mock methods here if needed
    };

    mockDiscordClient = {
      // Add mock properties or methods here if needed
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipantController],
      providers: [
        {
          provide: ParticipantService,
          useValue: mockParticipantService,
        },
        {
          provide: DiscordProxyService,
          useValue: mockDiscordProxyService,
        },
        {
          provide: Client,
          useValue: mockDiscordClient,
        },
      ],
    }).compile();

    controller = module.get<ParticipantController>(ParticipantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
