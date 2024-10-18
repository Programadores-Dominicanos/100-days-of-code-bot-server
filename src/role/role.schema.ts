import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Role extends Document {
  @Prop({ required: true })
  name: string;  // Role name (e.g., "Admin", "Participant")

  @Prop({ required: true, unique: true })
  role_id: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);