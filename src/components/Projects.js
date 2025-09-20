import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaServer, FaChartLine } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%);
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  perspective: 1000px;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: 0;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    opacity: 1;
    transform: rotate(180deg);
  }
  
  &:hover {
    transform: translateY(-20px) rotateX(8deg) rotateY(8deg) scale(1.05);
    border-color: #6366f1;
    box-shadow: 
      0 40px 80px rgba(99, 102, 241, 0.4),
      0 0 0 1px rgba(99, 102, 241, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 50px rgba(99, 102, 241, 0.2);
  }
  
  * {
    position: relative;
    z-index: 2;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1e293b, #334155);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #6366f1;
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
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProjectFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const Feature = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #a1a1aa;
  font-size: 0.9rem;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  color: #6366f1;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: #6366f1;
    transform: translateY(-2px);
  }
`;

const ProjectDate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
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
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
`;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Sentiment Analysis on Customer Reviews",
      date: "March 2025",
      icon: <FaChartLine />,
      description: "A scalable NLP-based cloud application for real-time sentiment detection on customer reviews with interactive React UI and Flask REST APIs.",
      features: [
        "Real-time sentiment detection using NLP",
        "Scalable cloud architecture on AWS",
        "Interactive React-based user interface",
        "Flask REST API integration",
        "High concurrency handling with low latency",
        "Automated testing for accuracy and robustness"
      ],
      techStack: ["Python", "Flask", "React", "AWS", "NLP", "Machine Learning"],
      github: "https://github.com/HarshithaPaidi05/sentiment-analysis-app"
    },
    {
      title: "Analyzing Employee Trends",
      date: "2024",
      icon: <FaChartLine />,
      description: "Comprehensive HR analytics project using SQL to analyze employee data, identify attrition trends, and provide actionable insights for workforce management.",
      features: [
        "SQL queries for employee counts and distributions analysis",
        "Identified high-risk attrition groups by age and education",
        "Job satisfaction correlation analysis",
        "Used JOINs, GROUP BY, and CASE statements",
        "Data-driven HR recommendations",
        "Comprehensive workforce insights"
      ],
      techStack: ["SQL", "Data Analysis", "HR Analytics", "Business Intelligence"],
      github: "https://github.com/HarshithaPaidi05/Employee-Trends"
    },
    {
      title: "Contacts Management System",
      date: "Sep 2024 - Nov 2024",
      icon: <FaServer />,
      description: "A full-stack web application for managing personal and professional contacts with comprehensive CRUD operations and robust data validation.",
      features: [
        "Complete CRUD operations for contact management",
        "React frontend with responsive design",
        "Node.js backend with robust API endpoints",
        "MongoDB database for efficient data storage",
        "Data integrity and consistency validations",
        "Secure contact information management"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "CRUD Operations"],
      github: "https://github.com/HarshithaPaidi05/contact-manage"
    },
    {
      title: "E-Commerce Website",
      date: "Jan 2024 - Mar 2024",
      icon: <FaServer />,
      description: "A full-featured e-commerce platform with product browsing, shopping cart, secure checkout, and advanced filtering capabilities.",
      features: [
        "Product browsing and catalog management",
        "Shopping cart and secure checkout process",
        "Dynamic filtering and search functionality",
        "User account and order management",
        "Payment history tracking",
        "Responsive design for all devices"
      ],
      techStack: ["React", "Node.js", "MongoDB", "E-commerce", "Payment Integration"],
      github: "https://github.com/HarshithaPaidi05/Ecommerce"
    },
    {
      title: "Expense Tracker",
      date: "June 2024",
      icon: <FaServer />,
      description: "A comprehensive financial management system with secure backend, intuitive UI, and interactive data visualizations for expense tracking and analysis.",
      features: [
        "Secure Node.js backend with SQL database",
        "Intuitive React-based user interface",
        "RESTful API for authentication and CRUD operations",
        "Interactive data visualizations (charts/graphs)",
        "Monthly spending insights and category breakdowns",
        "Transaction history and reporting"
      ],
      techStack: ["React", "Node.js", "SQL", "REST API", "Data Visualization"],
      github: "https://github.com/srinidhi289/expense-tracker"
    }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <FloatingElements>
        <FloatingElement
          style={{ top: '15%', left: '5%' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ bottom: '20%', right: '8%' }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </FloatingElements>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectDate>{project.date}</ProjectDate>
              
              <ProjectImage>
                {project.icon}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectFeatures>
                  {project.features.map((feature, idx) => (
                    <Feature key={idx}>{feature}</Feature>
                  ))}
                </ProjectFeatures>
                
                <TechStack>
                  {project.techStack.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
