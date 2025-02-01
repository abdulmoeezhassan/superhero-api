import { Injectable } from '@nestjs/common';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';

@Injectable()
export class SuperheroService {
  private superHeroes = [];

  async create(createSuperHeroDto: CreateSuperHeroDto) {
    try {
      // Creates a new superhero from the DTO and adds it to the super hero list.
      const { name, superPower, humilityScore } = createSuperHeroDto;
      const newSuperHero = {
        name,
        superPower,
        humilityScore,
      };
      this.superHeroes.push(newSuperHero);
      return newSuperHero;
    } catch (error) {
      console.error('Error in creating superhero', error);
      throw new Error("Error in creating superhero");
    }
  }

  async findAll() {
    try {
      // Retrieves all superheroes, sorted in descending order by humilityScore.
      const superheroes = await this.superHeroes.sort((a, b) => b.humilityScore - a.humilityScore);

      if (superheroes.length > 0) {
        return superheroes;
      } else {
        // Send a message if no superheroes are found
        return { message: 'No superheroes found' };
      }
    } catch (error) {
      console.error("Error in fetching superheros list", error);
      throw new Error(error);
    }
  }
}
