import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { clearFavorites } from '../redux/slices/favoritesSlice'; // Import the action to clear favorites
import '../components/styles/FavoriteMovies.css'; // Correct path to the CSS file

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleClearFavorites = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      dispatch(clearFavorites());
    }
  };

  return (
    <div className="favorite-movies-container">
      <div className="header">
        <h2 className='fav-header'>Your Favorite Movies</h2>
        <button className="clear-favorites-button" onClick={handleClearFavorites}>
          Clear
        </button>
      </div>
      <div className="movie-list">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} isFavoritePage={true} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;