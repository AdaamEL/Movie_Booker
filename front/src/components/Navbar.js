import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Connexion</Link></li>
            <li><Link to="/register">Inscription</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/reservations">Mes Réservations</Link></li>
            <li><Link to="/reservations/create">Créer une Réservation</Link></li>
            <li><Link to="/movies">Liste des Films</Link></li>
            <li><button onClick={logout}>Déconnexion</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
