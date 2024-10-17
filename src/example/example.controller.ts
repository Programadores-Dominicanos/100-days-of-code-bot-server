import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExampleService } from './example.service';
import { Example } from './schemas/example.schema';

@Controller('example')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) { }

    @Post()
    async create(@Body() example: Example): Promise<Example> {
        return this.exampleService.create(example);
    }
    @Get()
    async findAll(): Promise<Example[]> {
        return this.exampleService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Example> {
        return this.exampleService.findById(id);
    } 
}