import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateTrackDTO {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    genre: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    filename: string;
}
