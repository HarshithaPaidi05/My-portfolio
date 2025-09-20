import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaDatabase, FaCode, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiBootstrap, SiPostman } from 'react-icons/si';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    z-index: 1;
  }
`;

const CategoryHeader = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CategoryIcon = styled.div`
  font-size: 1.2rem;
`;

const CategoryDescription = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SkillsList = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: #6366f1;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

const SkillName = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
`;

const SkillLevel = styled.div`
  color: #a1a1aa;
  font-size: 0.8rem;
  margin-top: 0.25rem;
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
  width: 25px;
  height: 25px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
`;

const ScrollTriggeredIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(99, 102, 241, 0.2);
  pointer-events: none;
  user-select: none;
  z-index: 1;
`;

const ScrollTriggeredGlow = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
  z-index: 0;
`;

const FloatingCode = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: rgba(99, 102, 241, 0.2);
  pointer-events: none;
  user-select: none;
  z-index: 1;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      description: "Core programming languages I work with",
      skills: [
        { name: "Java", icon: <FaJava />, level: "Advanced" },
        { name: "JavaScript", icon: <FaJs />, level: "Advanced" },
        { name: "SQL", icon: <FaDatabase />, level: "Intermediate" },
        { name: "C", icon: <FaCode />, level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact />,
      description: "Modern frameworks and libraries for development",
      skills: [
        { name: "React.js", icon: <FaReact />, level: "Advanced" },
        { name: "HTML5", icon: <FaHtml5 />, level: "Advanced" },
        { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
        { name: "Bootstrap", icon: <SiBootstrap />, level: "Intermediate" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <FaCloud />,
      description: "Database and cloud technologies",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
        { name: "AWS", icon: <FaAws />, level: "Intermediate" },
        { name: "EC2", icon: <FaCloud />, level: "Basic" },
        { name: "S3", icon: <FaCloud />, level: "Basic" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaGitAlt />,
      description: "Development tools and technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
        { name: "VS Code", icon: <FaCode />, level: "Advanced" },
        { name: "Postman", icon: <SiPostman />, level: "Intermediate" },
        { name: "CI/CD", icon: <FaGitAlt />, level: "Intermediate" }
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <FloatingElements>
        {/* Scroll-triggered Glow Effects */}
        <ScrollTriggeredGlow
          style={{ top: '20%', left: '10%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.3, 1],
            opacity: [0, 0.2, 0.3, 0.2]
          } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <ScrollTriggeredGlow
          style={{ bottom: '30%', right: '8%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.15, 0.25, 0.15]
          } : {}}
          transition={{ duration: 2.2, delay: 1.2 }}
        />

        {/* Scroll-triggered Tech Icons */}
        <ScrollTriggeredIcon
          style={{ top: '15%', right: '20%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 2.5, delay: 0.8 }}
        >
          <FaReact />
        </ScrollTriggeredIcon>
        <ScrollTriggeredIcon
          style={{ bottom: '20%', left: '15%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.25, 0.4, 0.25],
            rotate: [0, -180, -360]
          } : {}}
          transition={{ duration: 2.8, delay: 1.5 }}
        >
          <FaJava />
        </ScrollTriggeredIcon>
        <ScrollTriggeredIcon
          style={{ top: '70%', right: '10%' }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={inView ? { 
            scale: [0, 1, 1.15, 1],
            opacity: [0, 0.2, 0.35, 0.2],
            rotate: [0, 90, 180, 270, 360]
          } : {}}
          transition={{ duration: 3, delay: 2 }}
        >
          <FaAws />
        </ScrollTriggeredIcon>

        {/* Scroll-triggered Code Elements */}
        <FloatingCode
          style={{ top: '25%', left: '5%' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { 
            opacity: [0, 0.4, 0.6, 0.4],
            x: [-30, 0, 10, 0]
          } : {}}
          transition={{ duration: 2.2, delay: 1 }}
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
          transition={{ duration: 2.5, delay: 1.8 }}
        >
          { }
        </FloatingCode>
        <FloatingCode
          style={{ top: '50%', left: '25%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: [0, 0.25, 0.4, 0.25],
            y: [20, 0, -5, 0]
          } : {}}
          transition={{ duration: 2, delay: 2.5 }}
        >
          =>
        </FloatingCode>

        {/* Original Floating Elements */}
        <FloatingElement
          style={{ top: '10%', right: '15%' }}
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
        <FloatingElement
          style={{ bottom: '25%', left: '10%' }}
          animate={{
            y: [0, 25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <FloatingElement
          style={{ top: '60%', right: '5%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </FloatingElements>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </SectionTitle>
        
        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryTitle>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  {category.title}
                </CategoryTitle>
                <CategoryDescription>{category.description}</CategoryDescription>
              </CategoryHeader>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
