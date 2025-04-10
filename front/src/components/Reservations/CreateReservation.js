import React, { useState } from 'react';
import { createReservation } from '../../services/api';

const CreateReservation = () => {
  const [reservationData, setReservationData] = useState({ movieId: '', startTime: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const reservation = await createReservation(reservationData, token);
      // Mettre à jour l'état ou rediriger
    } catch (error) {
      console.error('Erreur lors de la création de la réservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID du film:</label>
        <input type="text" name="movieId" value={reservationData.movieId} onChange={handleChange} />
      </div>
      <div>
        <label>Date et heure:</label>
        <input type="datetime-local" name="startTime" value={reservationData.startTime} onChange={handleChange} />
      </div>
      <button type="submit">Créer une réservation</button>
    </form>
  );
};

export default CreateReservation;
