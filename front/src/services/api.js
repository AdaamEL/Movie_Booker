import axios from 'axios';

const API_URL = 'https://dpg-cvrr0eogjchc73bgjedg-a.frankfurt-postgres.render.com/api';
const TMDB_API_KEY = 'f10148907106f6c8f26ed680132ad2ca';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: API_URL,
});

export const login = async (credentials) => {
  const response = await api.post('/user/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/user/register', userData);
  return response.data;
};

export const createReservation = async (reservationData, token) => {
  const response = await api.post('/reservations', reservationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getReservations = async (token) => {
  const response = await api.get('/reservations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchMovies = async (page = 1, query = '') => {
  const url = query
    ? `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`
    : `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

  const response = await axios.get(url);
  return response.data;
};
