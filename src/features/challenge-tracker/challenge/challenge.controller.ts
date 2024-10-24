import { Body, Controller, Post } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDTO } from './dto/create-challenge.dto';

@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  async create(@Body() createChallengeDto: CreateChallengeDTO) {
    return this.challengeService.create(createChallengeDto);
  }
}
