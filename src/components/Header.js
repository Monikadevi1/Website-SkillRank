import React from 'react';
import './Header.css'; // Import custom CSS if needed

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand text-success" href="#">SkillRank</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#how-it-works">How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about-us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
