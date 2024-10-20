import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Participant, ParticipantDocument } from './schema/participant.schema';
import { Model } from 'mongoose';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<ParticipantDocument>,
  ) {}
  async createParticipant({
    displayName,
    userId,
    username,
  }: CreateParticipantDto): Promise<ParticipantDocument> {
    const newParticipant = new this.participantModel({
      display_name: displayName,
      user_id: userId,
      username: username,
      challenges: [],
    });

    return newParticipant.save();
  }
}
