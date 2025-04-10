import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/api';
import './MovieList.css'; // Importez le fichier CSS pour ce composant

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(page, query);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    getMovies();
  }, [page, query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />
      <ul className="movie-grid">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Précédent
        </button>
        <span>
          Page {page} de {totalPages}
        </span>
        <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default MovieList;
