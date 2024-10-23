import { IsString, IsNotEmpty } from 'class-validator';

export class CreateParticipantDTO {
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}
