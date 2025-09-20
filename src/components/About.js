import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ffffff, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    color: #6366f1;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #d1d5db;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  
  h4 {
    font-size: 2rem;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #a1a1aa;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const VisualElement = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const CodeBlock = styled(motion.div)`
  background: #0a0a0a;
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #d1d5db;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #6366f1, transparent);
    animation: scan 2s linear infinite;
  }
  
  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const CodeLine = styled.div`
  margin-bottom: 0.5rem;
  
  &.keyword { color: #6366f1; }
  &.string { color: #10b981; }
  &.comment { color: #6b7280; }
  &.function { color: #f59e0b; }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  opacity: 0.1;
`;

const FloatingCodeElement = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: rgba(99, 102, 241, 0.3);
  pointer-events: none;
  user-select: none;
  z-index: 1;
`;

const ScrollTriggeredShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.2);
  z-index: 1;
`;

const Triangle = styled(ScrollTriggeredShape)`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid rgba(99, 102, 241, 0.2);
  background: none;
`;

const Square = styled(ScrollTriggeredShape)`
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
`;

const Circle = styled(ScrollTriggeredShape)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(30px);
  z-index: 0;
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <AboutSection id="about" ref={ref}>
      <FloatingShapes>
        {/* Scroll-triggered Glow Effects */}
        <GlowEffect
          style={{ top: '15%', left: '20%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.2, 0.3, 0.2]
          } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <GlowEffect
          style={{ bottom: '25%', right: '15%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.15, 0.25, 0.15]
          } : {}}
          transition={{ duration: 1.8, delay: 1 }}
        />

        {/* Scroll-triggered Geometric Shapes */}
        <Triangle
          style={{ top: '20%', right: '8%' }}
          initial={{ rotate: 0, scale: 0, opacity: 0 }}
          animate={inView ? { 
            rotate: [0, 180, 360],
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.3, 0.5, 0.3]
          } : {}}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <Square
          style={{ bottom: '30%', left: '10%' }}
          initial={{ rotate: 0, scale: 0, opacity: 0 }}
          animate={inView ? { 
            rotate: [0, 90, 180, 270, 360],
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.2, 0.4, 0.2]
          } : {}}
          transition={{ duration: 2.5, delay: 1.2 }}
        />
        <Circle
          style={{ top: '60%', left: '5%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.3, 1],
            opacity: [0, 0.25, 0.4, 0.25]
          } : {}}
          transition={{ duration: 1.8, delay: 1.5 }}
        />

        {/* Scroll-triggered Code Elements */}
        <FloatingCodeElement
          style={{ top: '25%', left: '15%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: [0, 0.4, 0.6, 0.4],
            y: [20, 0, -10, 0]
          } : {}}
          transition={{ duration: 2, delay: 0.6 }}
        >
          &lt;/&gt;
        </FloatingCodeElement>
        <FloatingCodeElement
          style={{ bottom: '35%', right: '20%' }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { 
            opacity: [0, 0.3, 0.5, 0.3],
            y: [-20, 0, 10, 0]
          } : {}}
          transition={{ duration: 2.2, delay: 1.1 }}
        >
          { }
        </FloatingCodeElement>

        {/* Original Floating Shapes */}
        <Shape
          style={{ width: '100px', height: '100px', top: '10%', right: '10%' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Shape
          style={{ width: '60px', height: '60px', bottom: '20%', left: '5%' }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </FloatingShapes>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        
        <AboutGrid>
          <AboutContent
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Passionate Developer & Problem Solver</h3>
            <p>
              I'm a dedicated Computer Science student at Shri Vishnu Engineering College For Women, 
              currently pursuing my B.Tech with an impressive CGPA of 9.22. My journey in technology 
              is driven by a passion for creating innovative solutions and solving complex problems.
            </p>
            <p>
              As a Software Engineer Intern at RGESIndia, I specialize in developing cloud-based, 
              distributed software solutions on AWS. I'm passionate about building secure, scalable, 
              and fault-tolerant applications that make a real impact.
            </p>
            <p>
              Beyond coding, I'm an active Radio Jockey at Radio Vishnu 90.4, where I host engaging 
              shows and coordinate events like SplashOut at my college, promoting confidence and 
              inspiring messages.
            </p>
            
            <StatsGrid
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StatCard
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4>9.22</h4>
                <p>Current CGPA</p>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4>98%</h4>
                <p>SSC Score</p>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4>97.5%</h4>
                <p>Intermediate</p>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4>Top 0.01%</h4>
                <p>Hackwithinfy 2025</p>
              </StatCard>
              <StatCard
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h4>Fresher</h4>
                <p>Ready to Learn</p>
              </StatCard>
            </StatsGrid>
          </AboutContent>
          
          <VisualElement
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CodeBlock
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <CodeLine className="comment">{/* My Journey in Code */}</CodeLine>
              <CodeLine className="keyword">const</CodeLine>
              <CodeLine className="function">  developer</CodeLine>
              <CodeLine className="string">  = {`{`}</CodeLine>
              <CodeLine className="string">    name: "Harshitha Paidi",</CodeLine>
              <CodeLine className="string">    passion: "Cloud & Web Development",</CodeLine>
              <CodeLine className="string">    skills: ["React", "AWS", "Node.js"],</CodeLine>
              <CodeLine className="string">    experience: "2+ years",</CodeLine>
              <CodeLine className="string">    education: "B.Tech CSE (9.22 CGPA)",</CodeLine>
              <CodeLine className="string">    currentRole: "Software Engineer Intern"</CodeLine>
              <CodeLine className="string">  {`};`}</CodeLine>
              <CodeLine></CodeLine>
              <CodeLine className="keyword">const</CodeLine>
              <CodeLine className="function">  buildFuture</CodeLine>
              <CodeLine className="string">  = () => {`{`}</CodeLine>
              <CodeLine className="string">    return developer.innovate();</CodeLine>
              <CodeLine className="string">  {`};`}</CodeLine>
            </CodeBlock>
          </VisualElement>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
