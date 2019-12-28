import React from 'react';
import Header from './header';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

export default function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
