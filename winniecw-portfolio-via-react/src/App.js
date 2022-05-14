import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {

  return (
    <div>
      <Header/>
      <Navigation />
      <main>
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
