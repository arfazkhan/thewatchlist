import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import Hero from '../components/Hero';
import Toast from '../components/Toast';

const MovieListPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToFavorites = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <Hero />
      <MovieList onAddToFavorites={handleAddToFavorites} />
      {showToast && <Toast message={toastMessage} />}
    </div>
  );
};

export default MovieListPage;