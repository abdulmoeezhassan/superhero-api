import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { SuperheroService } from './superhero.service';
export declare class SuperheroController {
    private superHeroService;
    constructor(superHeroService: SuperheroService);
    create(createSuperHeroDto: CreateSuperHeroDto): Promise<{
        name: string;
        superPower: string;
        humilityScore: number;
    }> | {
        message: any;
    };
    findAll(): Promise<any[] | {
        message: string;
    }> | {
        message: any;
    };
}
