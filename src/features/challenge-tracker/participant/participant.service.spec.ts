import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantService } from './participant.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Participant } from './schema/participant.schema';

describe('ParticipantService', () => {
  let service: ParticipantService;
  let participantModel: Model<Participant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParticipantService,
        {
          provide: getModelToken(Participant.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<ParticipantService>(ParticipantService);
    participantModel = module.get<Model<Participant>>(
      getModelToken(Participant.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have participantModel defined', () => {
    expect(participantModel).toBeDefined();
  });
});
