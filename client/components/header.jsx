import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [collapse, setCollapse] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth <= 575;
      if (isMobile) {
        setCollapse('collapse');
      } else {
        setCollapse('');
      }
    });
    const isMobile = window.innerWidth <= 575;
    if (isMobile) {
      setCollapse('collapse');
    } else {
      setCollapse('');
    }
  });

  return (
    <nav className={`navbar navbar-expand-sm navbar-dark fixed-top
      ${scrolled ? 'menu-bg' : 'menu-trans'}`} id="navMain">
      <div className="container">
        {/* <AnchorLink className="navbar-brand" href="#home">Wenhao Wang</AnchorLink> */}
        <button className="navbar-toggler no-border"
          type="button"
          data-toggle="collapse"
          data-target="#menuNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="menuNav">
          <ul className="navbar-nav menu-link">
            <Link data-toggle={collapse} href="#menuNav"
              activeClass="active" to="landing" spy={true} smooth={true} offset={-70}>
              Home
            </Link>
            <Link data-toggle={collapse} href="#menuNav"
              activeClass="active" to="about" spy={true} smooth={true} offset={-70}>
              About
            </Link>
            <Link data-toggle={collapse} href="#menuNav"
              activeClass="active" to="projects" spy={true} smooth={true} offset={-70}>
              Projects
            </Link>
            <Link data-toggle={collapse} href="#menuNav"
              activeClass="active" to="skills" spy={true} smooth={true} offset={-70}>
              Skills
            </Link>
            <Link data-toggle={collapse} href="#menuNav"
              activeClass="active" to="contact" spy={true} smooth={true} offset={-70}>
              Contact
            </Link>
            <a href="https://drive.google.com/file/d/1HCj_TltPGv4uELTeNoEsP9NiEeyAa9wh/view?usp=sharing" target="_blank"
              rel="noopener noreferrer">Resume</a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
