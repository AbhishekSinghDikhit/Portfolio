import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="bg-gray-50">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;