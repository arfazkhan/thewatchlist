import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { FaHeart, FaStar, FaTimes } from 'react-icons/fa'; // Import heart, star, and cross icons
import './styles/MovieCard.css';
import './styles/MovieList.css';
import posterImage from '../assets/p1.png'; // Import the poster image
import Toast from './Toast'; // Import the Toast component

const MovieCard = ({ movie, isFavoritePage }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Prevent triggering parent event handlers
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <div className="movie-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="rating-container">
        <FaStar className="star-icon" />
        <span className="movie-rating">{movie.rating}</span>
        {isFavorite && <FaHeart className="small-heart-icon" />} {/* Conditionally render small heart */}
      </div>
      <div className="poster-container">
        <img src={posterImage} alt={movie.movie} className="movie-poster" /> {/* Use the imported image */}
      </div>
      <div className={`overlay ${isHovered ? 'hovered' : ''}`}>
        <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={handleFavoriteToggle}>
          {isFavorite && isFavoritePage && isHovered ? (
            <FaTimes className="cross-icon" /> // Show cross icon when hovered and on favorite page
          ) : (
            <FaHeart className="heart-icon" />
          )}
        </button>
      </div>
      <div className="title-footer">
        <h3 className="movie-title">{movie.movie}</h3>
        <a className="imdb-link" href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
      </div>
      {showToast && <Toast message="Added to Favorites!" />}
    </div>
  );
};

export default MovieCard;