import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <AppContainer>
      <Background3D />
      <ContentWrapper>
        <Header 
          currentSection={currentSection} 
          setCurrentSection={setCurrentSection} 
        />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
