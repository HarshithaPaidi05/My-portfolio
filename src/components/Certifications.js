import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaAward, FaClock, FaCheckCircle } from 'react-icons/fa';

const CertificationsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #334155 0%, #475569 50%, #64748b 100%);
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CertificationCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: #6366f1;
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }
`;

const CertificationHeader = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
`;

const CertificationProvider = styled.h4`
  font-size: 1rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CertificationYear = styled.div`
  font-size: 0.9rem;
  color: #a1a1aa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CertificationStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
`;

const StatusBadge = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  
  ${props => props.status === 'completed' && `
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  `}
  
  ${props => props.status === 'in-progress' && `
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
  `}
`;

const CertificationDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  font-size: 0.95rem;
  position: relative;
  z-index: 2;
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

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      title: "SQL",
      provider: "Scaler Academy",
      year: "2025",
      status: "completed",
      description: "Comprehensive SQL certification covering database design, query optimization, and advanced SQL techniques for data management and analysis.",
      icon: <FaCertificate />
    },
    {
      title: "JavaScript",
      provider: "Let's Upgrade",
      year: "2025",
      status: "completed",
      description: "Advanced JavaScript certification focusing on modern ES6+ features, asynchronous programming, and web development best practices.",
      icon: <FaCertificate />
    },
    {
      title: "Machine Learning with Hands-on Labs",
      provider: "Industry Level Certification",
      year: "2025",
      status: "completed",
      description: "Industry-level machine learning certification with hands-on labs covering algorithms, data preprocessing, model training, and deployment.",
      icon: <FaAward />
    },
    {
      title: "Cloud Computing Fundamentals",
      provider: "Internal Training",
      year: "2025",
      status: "in-progress",
      description: "Ongoing cloud computing fundamentals training covering AWS services, cloud architecture, and best practices for scalable applications.",
      icon: <FaClock />
    }
  ];

  return (
    <CertificationsSection id="certifications" ref={ref}>
      <FloatingElements>
        <FloatingElement
          style={{ top: '15%', left: '8%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ bottom: '20%', right: '12%' }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <FloatingElement
          style={{ top: '50%', left: '3%' }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </FloatingElements>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </SectionTitle>
        
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <CertificationStatus>
                {cert.status === 'completed' ? (
                  <>
                    <FaCheckCircle />
                    <StatusBadge status="completed">Completed</StatusBadge>
                  </>
                ) : (
                  <>
                    <FaClock />
                    <StatusBadge status="in-progress">In Progress</StatusBadge>
                  </>
                )}
              </CertificationStatus>
              
              <CertificationHeader>
                <CertificationIcon>
                  {cert.icon}
                </CertificationIcon>
                <CertificationInfo>
                  <CertificationTitle>{cert.title}</CertificationTitle>
                  <CertificationProvider>{cert.provider}</CertificationProvider>
                  <CertificationYear>
                    <FaCertificate />
                    {cert.year}
                  </CertificationYear>
                </CertificationInfo>
              </CertificationHeader>
              
              <CertificationDescription>
                {cert.description}
              </CertificationDescription>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications;
