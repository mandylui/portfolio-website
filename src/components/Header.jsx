// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <nav className="header-names" aria-label="Main navigation">
        <NavLink className="header-mark" to="/" aria-label="Mandy Lui home">ML.</NavLink>
        <NavLink className="names" to="/" end>Home</NavLink>
        <NavLink className="names" to="/projects">Projects</NavLink>
        <NavLink className="names" to="/about">About</NavLink>
        <NavLink className="names" to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
