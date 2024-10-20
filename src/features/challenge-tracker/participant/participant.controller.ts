import { Body, Controller, Post } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  async createParticipant(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.createParticipant(createParticipantDto);
  }
}
