import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, MoreThan } from 'typeorm';
import { Reservation } from './reservation.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async createReservation(userId: number, movieId: number, startTime: string): Promise<Reservation> {
    const startDate = new Date(startTime); 
    const endTime = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); 

    const conflictingReservations = await this.reservationRepository.find({
      where: [
        { user: { id: userId }, movieId, startTime: LessThan(endTime), endTime: MoreThan(startDate) },
        { user: { id: userId }, movieId, startTime: startDate, endTime: endTime },
      ],
    });

    if (conflictingReservations.length > 0) {
      throw new ConflictException('Conflit de créneau : respectez le délai de 2 heures minimum entre les réservations.');
    }

    const reservation = this.reservationRepository.create({ user: { id: userId }, movieId, startTime: startDate, endTime });
    return this.reservationRepository.save(reservation);
  }

  async getReservations(userId: number): Promise<Reservation[]> {
    return this.reservationRepository.find({ where: { user: { id: userId } } });
  }

  async cancelReservation(id: number): Promise<void> {
    const reservation = await this.reservationRepository.findOne({ where: { id } });
    if (!reservation) {
      throw new NotFoundException('Réservation introuvable');
    }
    await this.reservationRepository.remove(reservation);
  }
}
