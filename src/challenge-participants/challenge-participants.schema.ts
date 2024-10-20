import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class ChallengeParticipants extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Participants', required: true })
  participant_id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Challenge', required: true })
  challenge_id: string;

  @Prop({ type: String, required: true })
  participant_status: string;
}

export const ChallengeParticipantsSchema = SchemaFactory.createForClass(ChallengeParticipants);