// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <nav className="header-names">
        <Link className ="names" to="/">Home</Link>
        <Link className ="names" to="/projects">Projects</Link>
        <Link className ="names" to="/about">About</Link>
        <Link className ="names" to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;