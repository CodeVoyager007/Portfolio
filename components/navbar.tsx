// components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="p-4">
      <nav className="navbar navbar-expand-lg container fixed-top">
        <div className="container-fluid" id="Navbar">
          <a className="navbar-brand" href="#Profile">Profile</a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skill">Skill</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
