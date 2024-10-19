import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChallengeDTO } from './dto/create-challenge.dto';
import { Challenge } from './schemas/challenge.schema';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  async create(createChallengeDto: CreateChallengeDTO): Promise<Challenge> {
    const createdChallenge = new this.challengeModel(createChallengeDto);
    return createdChallenge.save();
  }
}
