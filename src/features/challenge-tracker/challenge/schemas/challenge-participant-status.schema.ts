import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

enum ParticipantStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Schema({ _id: false })
export class ChallengeParticipantStatus {
  @Prop({ type: Types.ObjectId, ref: 'Participant', required: true })
  participant_id: Types.ObjectId;

  @Prop({ type: String, enum: ParticipantStatus, required: true })
  status: ParticipantStatus;
}

export const ChallengeParticipantStatusSchema = SchemaFactory.createForClass(
  ChallengeParticipantStatus,
);
