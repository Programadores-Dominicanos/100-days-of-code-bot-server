import { Body, Controller, Post } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDTO } from './dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  async createParticipant(@Body() createParticipantDto: CreateParticipantDTO) {
    return this.participantService.create(createParticipantDto);
  }
}
