import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

type Obj = { }

export type ExampleDocument = HydratedDocument<Example>;

@Schema()
export class Example {
    @Prop({ required: true })
    text: string;

    @Prop()
    num: number;

    @Prop()
    is: boolean;

    @Prop()
    object: Obj;

    @Prop({ default: Date.now })
    date: Date;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);

