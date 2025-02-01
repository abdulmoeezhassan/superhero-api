"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroService = void 0;
const common_1 = require("@nestjs/common");
let SuperheroService = class SuperheroService {
    constructor() {
        this.superHeroes = [];
    }
    async create(createSuperHeroDto) {
        try {
            const { name, superPower, humilityScore } = createSuperHeroDto;
            const newSuperHero = {
                name,
                superPower,
                humilityScore,
            };
            this.superHeroes.push(newSuperHero);
            return newSuperHero;
        }
        catch (error) {
            console.error('Error in creating superhero', error);
            throw new Error("Error in creating superhero");
        }
    }
    async findAll() {
        try {
            const superheroes = await this.superHeroes.sort((a, b) => b.humilityScore - a.humilityScore);
            if (superheroes.length > 0) {
                return superheroes;
            }
            else {
                return { message: 'No superheroes found' };
            }
        }
        catch (error) {
            console.error("Error in fetching superheros list", error);
            throw new Error(error);
        }
    }
};
exports.SuperheroService = SuperheroService;
exports.SuperheroService = SuperheroService = __decorate([
    (0, common_1.Injectable)()
], SuperheroService);
//# sourceMappingURL=superhero.service.js.map