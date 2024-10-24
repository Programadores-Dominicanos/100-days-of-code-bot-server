import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChallengeDTO } from './dto/create-challenge.dto';
import { Challenge } from './schemas/challenge.schema';
import { ParticipantService } from '../participant/participant.service';
import { DiscordProxyService } from '../../discord-proxy/discord-proxy.service';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
    private readonly participantService: ParticipantService,
    private readonly discordProxyService: DiscordProxyService,
  ) {}

  /**
   * Creates a new challenge with the given details and participants.
   * @param CreateChallengeDTO The data transfer object containing challenge details.
   * @returns A Promise resolving to the created Challenge.
   */
  async create(createChallengeDto: CreateChallengeDTO): Promise<Challenge> {
    const {
      title,
      description,
      roleId,
      challenge_status,
      hoursForElimination,
      completion_days,
      participants,
      channelId,
    } = createChallengeDto;

    const participantIds = participants.map(
      (participant) => participant.userId,
    );

    const { successful } = await this.discordProxyService.addRoleToParticipants(
      roleId,
      participantIds,
    );

    const successfulParticipants = participants.filter((participant) =>
      successful.includes(participant.userId),
    );
    const createdParticipants = await this.participantService.createMany(
      successfulParticipants,
    );

    const participantIdsAndStatus = createdParticipants.map((participant) => ({
      participant_id: participant._id,
      status: 'active',
    }));

    const challenge = new this.challengeModel({
      title,
      description,
      roleId,
      challenge_status,
      hoursForElimination,
      completion_days,
      channelId,
      participants: participantIdsAndStatus,
    });

    return challenge.save();
  }
}
