"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSuperHeroDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateSuperHeroDto {
}
exports.CreateSuperHeroDto = CreateSuperHeroDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Superman', description: 'The name of the superhero' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], CreateSuperHeroDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Flight', description: 'The superpower of the superhero' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Superpower is required' }),
    __metadata("design:type", String)
], CreateSuperHeroDto.prototype, "superPower", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, description: 'Humility score (must be less than 10)' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Humility score is required' }),
    (0, class_validator_1.Max)(10, { message: 'Humility score must be less than or equal to 10' }),
    __metadata("design:type", Number)
], CreateSuperHeroDto.prototype, "humilityScore", void 0);
//# sourceMappingURL=create-super-hero.dto.js.map