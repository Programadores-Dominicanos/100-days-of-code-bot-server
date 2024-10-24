import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  ParticipantChallengeStatus,
  ParticipantChallengeStatusSchema,
} from './participant-challenge-status.schema';

@Schema()
export class Participant {
  @Prop({ required: true })
  displayName: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  username: string;

  @Prop({ type: [ParticipantChallengeStatusSchema] })
  challenges: ParticipantChallengeStatus[];
}

export type ParticipantDocument = HydratedDocument<Participant>;
export const ParticipantSchema = SchemaFactory.createForClass(Participant);
