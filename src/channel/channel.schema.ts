import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Channel extends Document {
    @Prop( { required: true } )
    name: string;

    @Prop( { required: true, unique: true } )
    channel_id: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);