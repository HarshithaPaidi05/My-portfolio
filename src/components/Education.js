import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
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

const EducationTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #6366f1, #8b5cf6, #ec4899);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const EducationItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 2rem;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 2rem;
    }
  }
`;

const EducationContent = styled(motion.div)`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 2rem;
  width: 45%;
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
  }
  
  ${EducationItem}:nth-child(odd) & {
    &::before {
      right: -30px;
      border-left-color: rgba(99, 102, 241, 0.3);
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  
  ${EducationItem}:nth-child(even) & {
    &::before {
      left: -30px;
      border-right-color: rgba(99, 102, 241, 0.3);
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EducationIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 3;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 1rem;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Institution = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const EducationMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #a1a1aa;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Score = styled.div`
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  text-align: center;
  margin-top: 1rem;
`;

const ScoreValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 0.25rem;
`;

const ScoreLabel = styled.div`
  font-size: 0.8rem;
  color: #a1a1aa;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
`;

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const educationData = [
    {
      degree: "B.Tech Computer Science",
      institution: "Shri Vishnu Engineering College For Women",
      duration: "Oct. 2022 – May 2026",
      location: "Bhimavaram, Andhra Pradesh",
      score: "9.22",
      scoreType: "CGPA",
      icon: <FaGraduationCap />
    },
    {
      degree: "Intermediate",
      institution: "Sasi Junior College",
      duration: "Mar. 2022",
      location: "Tanuku, Andhra Pradesh",
      score: "97.5%",
      scoreType: "Percentage",
      icon: <FaAward />
    },
    {
      degree: "SSC",
      institution: "Bhashyam EM High School",
      duration: "Mar. 2020",
      location: "Tanuku, Andhra Pradesh",
      score: "98%",
      scoreType: "Percentage",
      icon: <FaAward />
    }
  ];

  return (
    <EducationSection id="education" ref={ref}>
      <FloatingElements>
        <FloatingElement
          style={{ top: '20%', right: '10%' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ bottom: '30%', left: '5%' }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </FloatingElements>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </SectionTitle>
        
        <EducationTimeline>
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EducationIcon>
                {edu.icon}
              </EducationIcon>
              
              <EducationContent
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <EducationHeader>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                  <EducationMeta>
                    <MetaItem>
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </MetaItem>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      <span>{edu.location}</span>
                    </MetaItem>
                  </EducationMeta>
                </EducationHeader>
                
                <Score>
                  <ScoreValue>{edu.score}</ScoreValue>
                  <ScoreLabel>{edu.scoreType}</ScoreLabel>
                </Score>
              </EducationContent>
            </EducationItem>
          ))}
        </EducationTimeline>
      </Container>
    </EducationSection>
  );
};

export default Education;
