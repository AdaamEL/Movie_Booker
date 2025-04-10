import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Connexion</Link></li>
        <li><Link to="/register">Inscription</Link></li>
        <li><Link to="/reservations">Mes Réservations</Link></li>
        <li><Link to="/reservations/create">Créer une Réservation</Link></li>
        <li><Link to="/movies">Liste des Films</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
