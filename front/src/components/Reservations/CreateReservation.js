import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../../services/api';

const CreateReservation = () => {
  const [reservationData, setReservationData] = useState({ movieId: '', startTime: '' });
  const navigate = useNavigate(); // Appel du hook au niveau supérieur du composant

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await createReservation(reservationData, token);
      navigate('/reservations'); // Utilisation de la fonction de navigation
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
