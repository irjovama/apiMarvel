import { Test, TestingModule } from '@nestjs/testing';
import { MarvelApi as MarvelApiService } from './marvel-api.service';

describe('MarvelApiService', () => {
  let service: MarvelApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarvelApiService],
    }).compile();

    service = module.get<MarvelApiService>(MarvelApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
