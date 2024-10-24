import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Challenge, ChallengeSchema } from './schemas/challenge.schema';
import { ParticipantModule } from '../participant/participant.module';
import { DiscordProxyModule } from 'src/features/discord-proxy/discord-proxy.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Challenge.name, schema: ChallengeSchema },
    ]),
    ParticipantModule,
    DiscordProxyModule,
  ],

  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class ChallengeModule {}
