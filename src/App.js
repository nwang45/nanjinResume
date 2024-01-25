// src/App.js
import React from 'react';
import FirstSection from './components/FirstSection';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles.css'; // Your global styles

function App() {
  return (
    <div>
      <Header />
      <main>
      <FirstSection />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
