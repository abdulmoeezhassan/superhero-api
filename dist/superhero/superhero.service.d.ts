import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
export declare class SuperheroService {
    private superHeroes;
    create(createSuperHeroDto: CreateSuperHeroDto): Promise<{
        name: string;
        superPower: string;
        humilityScore: number;
    }>;
    findAll(): Promise<any[] | {
        message: string;
    }>;
}
