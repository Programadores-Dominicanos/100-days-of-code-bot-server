import { Controller, Get } from '@nestjs/common';
import { DiscordProxyService } from './discord-proxy.service';
import { Role } from 'discord.js';

@Controller('discord-proxy')
export class DiscordProxyController {
  constructor(private readonly discordProxyService: DiscordProxyService) {}

  @Get('roles')
  async getServerRoles(): Promise<Role[]> {
    return this.discordProxyService.getServerRoles();
  }
}
