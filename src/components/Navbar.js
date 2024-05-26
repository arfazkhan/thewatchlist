import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
      <Link to="/">
          <img src={logo} alt="Your Logo" className="logo" /> 
        </Link>
        <div>
          <Link to="/" className="mr-4 text-white hover:text-gray-600">Movies</Link>
          <Link to="/favorites" className="text-white hover:text-gray-600">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
