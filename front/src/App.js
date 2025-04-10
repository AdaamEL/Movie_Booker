import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateReservation from './components/Reservations/CreateReservation';
import ReservationList from './components/Reservations/ReservationList';
import MovieList from './components/Movies/MovieList';
import Navbar from './components/Navbar';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reservations/create" element={<ProtectedRoute element={<CreateReservation />} />} />
            <Route path="/reservations" element={<ProtectedRoute element={<ReservationList />} />} />
            <Route path="/movies" element={<MovieList />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
