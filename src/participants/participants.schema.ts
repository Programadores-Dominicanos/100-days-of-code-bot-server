import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Participants extends Document {
  @Prop({ type: String, required: true })
  display_name: string;

  @Prop({ type: String, required: true })
  user_id: string;

  @Prop({ type: String, required: true })
  username: string;
}

export const ParticipantsSchema = SchemaFactory.createForClass(Participants);