import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { ChallengeStatus } from '../schemas/challenge-status.enum';

export class CreateChallengeDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  channel_id: number;

  @IsNumber()
  role_id: number;

  @IsEnum(ChallengeStatus)
  @IsOptional()
  challenge_status?: ChallengeStatus;

  @IsNumber()
  @IsOptional()
  hoursForElimination?: number;

  @IsNumber()
  @IsOptional()
  completion_days?: number;
}
