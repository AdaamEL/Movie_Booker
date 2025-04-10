import axios from 'axios';

const API_URL = 'https://movie-booker-dy8y.onrender.com/';
const TMDB_API_KEY = 'f10148907106f6c8f26ed680132ad2ca';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/user/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/user/register', userData);
    return response.data;
  } catch (error) {
    console.error('Register request failed:', error);
    throw error;
  }
};

export const createReservation = async (reservationData, token) => {
  try {
    const response = await api.post('/reservations', reservationData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Create reservation request failed:', error);
    throw error;
  }
};

export const getReservations = async (token) => {
  try {
    const response = await api.get('/reservations', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Get reservations request failed:', error);
    throw error;
  }
};

export const fetchMovies = async (page = 1, query = '') => {
  const url = query
    ? `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`
    : `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Fetch movies request failed:', error);
    throw error;
  }
};
