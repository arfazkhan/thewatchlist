import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { clearFavorites } from '../redux/slices/favoritesSlice';
import Toast from '../components/Toast';
import '../components/styles/FavoriteMovies.css';

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleClearFavorites = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      dispatch(clearFavorites());
    }
  };

  const handleRemoveFromFavorites = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="favorite-movies-container">
      {favorites.length > 0 ? (
        <>
          <div className="header">
            <h2 className="fav-header">Your Favorite Movies</h2>
            <button className="clear-favorites-button" onClick={handleClearFavorites}>
              Clear Favorites
            </button>
          </div>
          <div className="movie-list">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavoritePage={true}
                onRemoveFromFavorites={handleRemoveFromFavorites}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="no-favorites">
          <h2 className="no-favorites-text">Sorry! No favorites added.</h2>
          <Link to="/" className="add-favorites-link">
            <button className="add-favorites-button">
              Explore the Cinematic Universe
            </button>
          </Link>
        </div>
      )}
      {showToast && <Toast message={toastMessage} />}
    </div>
  );
};

export default FavoriteMovies;