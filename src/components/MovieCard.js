import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { FaHeart, FaStar, FaTimes } from 'react-icons/fa';
import './styles/MovieCard.css';
import posterImage from '../assets/p1.png';

const MovieCard = ({ movie, onAddToFavorites, isFavoritePage, onRemoveFromFavorites }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(movie));
      if (isFavoritePage) {
        onRemoveFromFavorites('Removed from Favorites!');
      }
    } else {
      dispatch(addFavorite(movie));
      onAddToFavorites('Added to Favorites!');
    }
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rating-container">
        <FaStar className="star-icon" />
        <span className="movie-rating">{movie.rating}</span>
        {isFavorite && <FaHeart className="small-heart-icon" />}
      </div>
      <div className="poster-container">
        <img src={posterImage} alt={movie.movie} className="movie-poster" />
      </div>
      <div className={`overlay ${isHovered ? 'hovered' : ''}`}>
        <button
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteToggle}
        >
          {isFavorite && isFavoritePage && isHovered ? (
            <FaTimes className="cross-icon" />
          ) : (
            <FaHeart className="heart-icon" />
          )}
        </button>
      </div>
      <div className="title-footer">
        <h3 className="movie-title">{movie.movie}</h3>
        <a className="imdb-link" href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
          IMDb
        </a>
      </div>
    </div>
  );
};

export default MovieCard;