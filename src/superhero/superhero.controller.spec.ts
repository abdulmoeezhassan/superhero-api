import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  const mockSuperheroService = {
    create: jest.fn().mockResolvedValue({
      name: 'Test Hero',
      superPower: 'Super Strength',
      humilityScore: 100,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: mockSuperheroService,
        },
      ],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
     // Test for successful superhero creation.
    it('should create a superhero', async () => {
      const createSuperHeroDto: CreateSuperHeroDto = {
        name: 'Test Hero',
        superPower: 'Super Strength',
        humilityScore: 100,
      };

      const result = await controller.create(createSuperHeroDto);

      expect(result).toEqual({
        name: 'Test Hero',
        superPower: 'Super Strength',
        humilityScore: 100,
      });
      expect(service.create).toHaveBeenCalledWith(createSuperHeroDto);
    });
    
    // Test for handling errors during superhero creation.
    it('should throw an error if superhero creation fails', async () => {
      const createSuperHeroDto: CreateSuperHeroDto = {
        name: '',
        superPower: 'Super Strength',
        humilityScore: 8,
      };

      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Name is required'));

      await expect(controller.create(createSuperHeroDto)).rejects.toThrow('Name is required');
    });
  });
});
