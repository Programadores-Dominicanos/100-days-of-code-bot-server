import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ChallengeDocument = HydratedDocument<Challenge>;

export enum ChallengeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

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
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
