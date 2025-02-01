import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { SuperheroService } from './superhero.service';

@Controller('superhero')
export class SuperheroController {
  constructor(private superHeroService: SuperheroService){}

  @Post('/create-superhero')
  create(@Body() createSuperHeroDto: CreateSuperHeroDto) {
    try {
      return this.superHeroService.create(createSuperHeroDto);
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get('/get-all-superheros')
  findAll() {
    try {
      return this.superHeroService.findAll();
    } catch (error) {
      return { message: error.message };
    }
  }
}
