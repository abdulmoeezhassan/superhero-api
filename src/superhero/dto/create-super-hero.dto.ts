import { IsNotEmpty, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSuperHeroDto {
    @ApiProperty({ example: 'Superman', description: 'The name of the superhero' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @ApiProperty({ example: 'Flight', description: 'The superpower of the superhero' })
    @IsNotEmpty({ message: 'Superpower is required' })
    superPower: string;

    @ApiProperty({ example: 8, description: 'Humility score (must be less than 10)' })
    @IsNotEmpty({ message: 'Humility score is required' })
    @Max(10, { message: 'Humility score must be less than or equal to 10' })
    humilityScore: number;
}
