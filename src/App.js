import React from 'react';
import { Home, About, Projects, Skillsets, Contact } from './pages';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import './style/main.css';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skillsets />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
