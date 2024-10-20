import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ChallengeStatus } from './challenge-status.enum';
import {
  ChallengeParticipantStatus,
  ChallengeParticipantStatusSchema,
} from './challenge-participant-status.schema';

export type ChallengeDocument = HydratedDocument<Challenge>;

@Schema()
export class Challenge {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  // @TODO  this is going to be a ObjectID()
  @Prop({ required: true })
  channel_id: number;

  // @TODO  this is going to be a ObjectID()
  @Prop({ required: true })
  role_id: number;

  @Prop({
    enum: ChallengeStatus,
    default: ChallengeStatus.ACTIVE,
  })
  challenge_status: ChallengeStatus;

  @Prop()
  hoursForElimination: number;

  @Prop()
  completion_days: number;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ type: [ChallengeParticipantStatusSchema] })
  participants: ChallengeParticipantStatus[];
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
