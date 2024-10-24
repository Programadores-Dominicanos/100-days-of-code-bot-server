import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsArray,
} from 'class-validator';
import { ChallengeStatus } from '../schemas/challenge-status.enum';
import { CreateParticipantDTO } from '../../participant/dto/create-participant.dto';

export class CreateChallengeDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  channelId: string;

  @IsString()
  roleId: string;

  @IsEnum(ChallengeStatus)
  @IsOptional()
  challenge_status?: ChallengeStatus;

  @IsNumber()
  @IsOptional()
  hoursForElimination?: number;

  @IsNumber()
  @IsOptional()
  completion_days?: number;

  @IsArray()
  participants: CreateParticipantDTO[];
}
