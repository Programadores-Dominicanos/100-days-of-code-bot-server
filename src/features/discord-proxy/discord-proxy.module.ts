import { Module } from '@nestjs/common';
import { DiscordProxyController } from './discord-proxy.controller';
import { DiscordProxyService } from './discord-proxy.service';

@Module({
  controllers: [DiscordProxyController],
  providers: [DiscordProxyService],
  exports: [DiscordProxyService],
})
export class DiscordProxyModule {}
