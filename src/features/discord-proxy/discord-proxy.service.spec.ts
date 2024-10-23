import { Test, TestingModule } from '@nestjs/testing';
import { DiscordProxyService } from './discord-proxy.service';
import { Client } from 'discord.js';

describe('DiscordProxyService', () => {
  let service: DiscordProxyService;
  let mockDiscordClient: Partial<Client>;

  beforeEach(async () => {
    mockDiscordClient = {
      // Add mock properties or methods here if needed
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DiscordProxyService,
        {
          provide: Client,
          useValue: mockDiscordClient,
        },
      ],
    }).compile();

    service = module.get<DiscordProxyService>(DiscordProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
