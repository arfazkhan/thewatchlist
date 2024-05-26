import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, filterMovies, setSearchQuery } from '../redux/slices/moviesSlice';
import MovieCard from './MovieCard';
import { FaSearch } from 'react-icons/fa';
import './styles/MovieList.css';

const MovieList = ({ onAddToFavorites }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.filteredItems);
  const status = useSelector((state) => state.movies.status);
  const searchQuery = useSelector((state) => state.movies.searchQuery);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterMovies());
  }, [dispatch, searchQuery]);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading movies.</div>;

  return (
    <div className="movie-list-container">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
          placeholder="Search movies..."
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="movie-list">
        {movies.length === 0 && searchQuery.length >= 3 && <div>No movies found.</div>}
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToFavorites={onAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;