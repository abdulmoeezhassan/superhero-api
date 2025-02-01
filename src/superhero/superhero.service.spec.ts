import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import exp from 'constants';
import { SuperheroController } from './superhero.controller';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService],
      controllers: [SuperheroController]
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('create-superhero', () => {
  //   it('should create a and return a new superhero', () => {

  //     const createSuperHeroDto: CreateSuperHeroDto = {
  //       name: 'Superman',
  //       superPower: 'Super Strength',
  //       humilityScore: 5,
  //     };

  //     const result = service.create(createSuperHeroDto);

  //     expect(result).toEqual({
  //       name: 'Superman',
  //       superPower: 'Super Strength',
  //       humilityScore: 5,
  //     });
  //     expect(service['superHeroes'].length).toBe(1);
  //     expect(service['superHeroes'][0]).toEqual(result);
  //   });

  //   it('should throw an error if superhero creation fails', async () => {

  //     const createSuperHeroDto: CreateSuperHeroDto = {
  //       name: '',
  //       superPower: 'Super Strength',
  //       humilityScore: 8,
  //     };

  //     await expect(service.create(createSuperHeroDto)).rejects.toThrow('Name is required');
  //   })
  // });
});
