import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Example, ExampleDocument } from './schemas/example.schema';

@Injectable()
export class ExampleService {
    constructor(@InjectModel(Example.name) private exampleModel: Model<Example>,
                @InjectConnection() private connection: Connection) {}

    async create(createExample: Example): Promise<Example> {
        const created = new this.exampleModel(createExample);
        return created.save();
    }
    async findAll(): Promise<Example[]> {
        return this.exampleModel.find().exec();
    }
    async findById(id: string): Promise<Example> {
        return this.exampleModel.findById(id).exec();
    }
}