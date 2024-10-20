import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Challenge extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  channel_id: string;

  @Prop({ type: String, required: true })
  role_id: string;

  @Prop({ type: String, required: true })
  challenge_status: string;

  @Prop({ type: Number, required: true })
  hoursForElimination: number;

  @Prop({ type: Number, required: true })
  completion_days: number;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);