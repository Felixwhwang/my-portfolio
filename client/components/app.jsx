import React from 'react';
import Header from './header';
import AboutMe from './about-me';
import Application from './application';
import Skill from './skill';
import Contact from './contact-me';

export default function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Application />
      <Skill />
      <Contact />
    </div>
  );
}
