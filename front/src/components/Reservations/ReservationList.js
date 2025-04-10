import React, { useEffect, useState } from 'react';
import { getReservations } from '../../services/api';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem('token');
      try {
        const data = await getReservations(token);
        setReservations(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Mes Réservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Film ID: {reservation.movieId}, Date: {new Date(reservation.startTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
