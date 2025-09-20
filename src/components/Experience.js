import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaCloud } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
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

const Timeline = styled.div`
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

const TimelineItem = styled(motion.div)`
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

const TimelineContent = styled(motion.div)`
  background: rgba(15, 23, 42, 0.8);
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
  
  ${TimelineItem}:nth-child(odd) & {
    &::before {
      right: -30px;
      border-left-color: rgba(99, 102, 241, 0.3);
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
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

const TimelineIcon = styled.div`
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

const JobHeader = styled.div`
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const JobMeta = styled.div`
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

const JobDescription = styled.div`
  color: #d1d5db;
  line-height: 1.6;
`;

const Responsibilities = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const Responsibility = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #d1d5db;
  
  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #6366f1;
    font-size: 0.8rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
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

const ScrollTriggeredIcon = styled(motion.div)`
  position: absolute;
  font-size: 2.5rem;
  color: rgba(99, 102, 241, 0.2);
  pointer-events: none;
  user-select: none;
  z-index: 1;
`;

const ScrollTriggeredGlow = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(25px);
  z-index: 0;
`;

const FloatingCode = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  color: rgba(99, 102, 241, 0.2);
  pointer-events: none;
  user-select: none;
  z-index: 1;
`;

const TimelineGlow = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
  border-radius: 2px;
  filter: blur(2px);
  z-index: 0;
`;

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "RGESIndia (Risk Guard Enterprise Solutions)",
      duration: "May 2025 – Present",
      type: "Hybrid",
      location: "Remote/Office",
      icon: <FaCode />,
      responsibilities: [
        "Developed cloud-based, distributed software solutions on AWS with secure, scalable, and fault-tolerant features",
        "Optimized performance and reliability through automated testing, code reviews, and CI/CD practices, reducing latency and enabling regular production releases",
        "Contributed across the full software development lifecycle (design → development → deployment) in an Agile environment"
      ],
      techStack: ["AWS", "Cloud Computing", "CI/CD", "Agile", "Distributed Systems"]
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <FloatingElements>
        {/* Scroll-triggered Timeline Glow */}
        <TimelineGlow
          style={{ top: '50%', left: '50%', transform: 'translateX(-50%)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { 
            scaleX: [0, 1, 1.2, 1],
            opacity: [0, 0.3, 0.5, 0.3]
          } : {}}
          transition={{ duration: 2.5, delay: 0.5 }}
        />

        {/* Scroll-triggered Glow Effects */}
        <ScrollTriggeredGlow
          style={{ top: '15%', left: '15%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.2, 0.3, 0.2]
          } : {}}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <ScrollTriggeredGlow
          style={{ bottom: '25%', right: '12%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.15, 0.25, 0.15]
          } : {}}
          transition={{ duration: 2.2, delay: 1.5 }}
        />

        {/* Scroll-triggered Professional Icons */}
        <ScrollTriggeredIcon
          style={{ top: '25%', right: '20%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 2.5, delay: 1 }}
        >
          <FaBriefcase />
        </ScrollTriggeredIcon>
        <ScrollTriggeredIcon
          style={{ bottom: '35%', left: '18%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.25, 0.4, 0.25],
            rotate: [0, -180, -360]
          } : {}}
          transition={{ duration: 2.8, delay: 1.8 }}
        >
          <FaCode />
        </ScrollTriggeredIcon>
        <ScrollTriggeredIcon
          style={{ top: '60%', right: '8%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.15, 1],
            opacity: [0, 0.2, 0.35, 0.2],
            rotate: [0, 90, 180, 270, 360]
          } : {}}
          transition={{ duration: 3, delay: 2.2 }}
        >
          <FaCloud />
        </ScrollTriggeredIcon>

        {/* Scroll-triggered Code Elements */}
        <FloatingCode
          style={{ top: '20%', left: '8%' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { 
            opacity: [0, 0.4, 0.6, 0.4],
            x: [-30, 0, 10, 0]
          } : {}}
          transition={{ duration: 2.2, delay: 1.2 }}
        >
          &lt;/&gt;
        </FloatingCode>
        <FloatingCode
          style={{ bottom: '40%', right: '25%' }}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { 
            opacity: [0, 0.3, 0.5, 0.3],
            x: [30, 0, -10, 0]
          } : {}}
          transition={{ duration: 2.5, delay: 2 }}
        >
          { }
        </FloatingCode>
        <FloatingCode
          style={{ top: '45%', left: '30%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: [0, 0.25, 0.4, 0.25],
            y: [20, 0, -5, 0]
          } : {}}
          transition={{ duration: 2, delay: 2.8 }}
        >
          =>
        </FloatingCode>

        {/* Original Floating Elements */}
        <FloatingElement
          style={{ top: '20%', right: '10%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ bottom: '30%', left: '5%' }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 8,
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
          Experience
        </SectionTitle>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineIcon>
                {exp.icon}
              </TimelineIcon>
              
              <TimelineContent
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <JobHeader>
                  <JobTitle>{exp.title}</JobTitle>
                  <Company>{exp.company}</Company>
                  <JobMeta>
                    <MetaItem>
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </MetaItem>
                    <MetaItem>
                      <FaBriefcase />
                      <span>{exp.type}</span>
                    </MetaItem>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </MetaItem>
                  </JobMeta>
                </JobHeader>
                
                <JobDescription>
                  <Responsibilities>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <Responsibility key={idx}>
                        {responsibility}
                      </Responsibility>
                    ))}
                  </Responsibilities>
                  
                  <TechStack>
                    {exp.techStack.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
