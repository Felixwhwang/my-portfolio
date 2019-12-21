import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (
    <nav id="home">
      <ul className="smooth-scroll list-unstyled">
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills">Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  );
}
