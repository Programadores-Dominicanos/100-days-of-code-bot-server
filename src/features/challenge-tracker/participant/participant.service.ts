import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Participant, ParticipantDocument } from './schema/participant.schema';
import { Model } from 'mongoose';
import { CreateParticipantDTO } from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<ParticipantDocument>,
  ) {}
  async create({
    displayName,
    userId,
    username,
  }: CreateParticipantDTO): Promise<ParticipantDocument> {
    const newParticipant = new this.participantModel({
      display_name: displayName,
      user_id: userId,
      username: username,
      challenges: [],
    });

    return newParticipant.save();
  }

  //@TODO add all participants at once
  async createMany(
    participants: CreateParticipantDTO[],
  ): Promise<ParticipantDocument[]> {
    const createdParticipants = await Promise.all(
      participants.map(async (participant) => {
        const newParticipant = new this.participantModel({
          displayName: participant.displayName,
          userId: participant.userId,
          username: participant.username,
          challenges: [],
        });
        return newParticipant.save();
      }),
    );

    return createdParticipants;
  }
}
