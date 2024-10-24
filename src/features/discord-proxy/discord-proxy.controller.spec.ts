import { Test, TestingModule } from '@nestjs/testing';
import { DiscordProxyController } from './discord-proxy.controller';
import { DiscordProxyService } from './discord-proxy.service';
import { Client } from 'discord.js';

describe('DiscordProxyController', () => {
  let controller: DiscordProxyController;
  let mockDiscordProxyService: Partial<DiscordProxyService>;
  let mockDiscordClient: Partial<Client>;

  beforeEach(async () => {
    mockDiscordProxyService = {
      // Add mock methods here if needed
    };

    mockDiscordClient = {
      // Add mock properties or methods here if needed
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscordProxyController],
      providers: [
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

    controller = module.get<DiscordProxyController>(DiscordProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
