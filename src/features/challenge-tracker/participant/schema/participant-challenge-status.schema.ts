import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ _id: false })
export class ParticipantChallengeStatus {
  @Prop({ type: Types.ObjectId, ref: 'Challenge', required: true })
  challenge_id: Types.ObjectId;

  @Prop({ required: true })
  status: string;
}

export const ParticipantChallengeStatusSchema = SchemaFactory.createForClass(
  ParticipantChallengeStatus,
);
