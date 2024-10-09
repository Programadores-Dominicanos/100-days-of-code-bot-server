import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntentsBitField } from 'discord.js';
import { AppUpdate } from './app.update';
import { NecordModule } from 'necord';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NecordModule.forRoot({
      token: process.env.DISCORD_BOT_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
