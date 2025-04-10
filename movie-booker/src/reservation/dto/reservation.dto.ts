import { IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReservationDto {
  @ApiProperty({ description: 'The ID of the user making the reservation', example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ description: 'The ID of the movie being reserved', example: 123 })
  @IsInt()
  movieId: number;

  @ApiProperty({ description: 'The start time of the reservation', example: '2023-10-01T14:00:00Z' })
  @IsDate()
  startTime: Date;
}
