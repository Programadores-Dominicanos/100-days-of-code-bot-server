import { Module } from '@nestjs/common';
import { ChallengeModule } from './challenge/challenge.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [ChallengeModule, ParticipantModule],
})
export class ChallengeTrackerModule {}
