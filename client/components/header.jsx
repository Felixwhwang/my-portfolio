import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top" id="home">
      <div className="container">
        <AnchorLink className="navbar-brand" href="#home">Wenhao Wang</AnchorLink>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menuNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menuNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <AnchorLink href="#home" className="nav-link">Home</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#about" className="nav-link">About</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#projects" className="nav-link">Projects</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#skills" className="nav-link">Skills</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#contact" className="nav-link">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
