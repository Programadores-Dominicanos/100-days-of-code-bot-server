import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ChallengeUpdate extends Document {
  @Prop({ type: String, required: true })
  participant_id: string;

  @Prop({ type: String, required: true })
  challenge_id: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ required: true })
  message: string;

  @Prop()
  message_attachment: string;

  @Prop()
  last_update?: number;
}

export const ChallengeUpdateSchema = SchemaFactory.createForClass(ChallengeUpdate);