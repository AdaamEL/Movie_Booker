import { Controller, Post, Get, Delete, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDto } from './dto/reservation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../user/guards/jwt-auth.guard';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new reservation' })
  @ApiResponse({ status: 201, description: 'The reservation has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid date format for startTime.' })
  async createReservation(@Body() reservationDto: ReservationDto) {
    const startDate = new Date(reservationDto.startTime);

    if (isNaN(startDate.getTime())) {
      throw new Error('Invalid date format for startTime');
    }

    return this.reservationService.createReservation(
      reservationDto.userId,
      reservationDto.movieId,
      startDate.toISOString(),
    );
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get reservations for a user' })
  @ApiResponse({ status: 200, description: 'The reservations have been successfully retrieved.' })
  async getReservations(@Body('userId') userId: number) {
    return this.reservationService.getReservations(userId);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Cancel a reservation' })
  @ApiResponse({ status: 200, description: 'The reservation has been successfully canceled.' })
  async cancelReservation(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.cancelReservation(id);
  }
}
