import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import MovieListPage from './pages/MovieListPage';
import FavoriteMovies from './pages/FavoriteMovies';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;