import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMicrophone, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const LeadershipSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%);
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

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const LeadershipCard = styled(motion.div)`
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

const CardHeader = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RoleIcon = styled.div`
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

const RoleInfo = styled.div`
  flex: 1;
`;

const RoleTitle = styled.h3`
  font-size: 1.4rem;
  color: #6366f1;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Organization = styled.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const RoleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #a1a1aa;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Duration = styled.div`
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

const RoleDescription = styled.div`
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const Activities = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const Activity = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1.5;
  
  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #6366f1;
    font-size: 0.8rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
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

const Leadership = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const leadershipRoles = [
    {
      title: "Radio Jockey",
      organization: "Radio Vishnu 90.4",
      duration: "Jan. 2023 – Present",
      location: "Bhimavaram, India",
      icon: <FaMicrophone />,
      description: "Hosting engaging radio shows on music, campus life, and events, delivering dynamic and interactive content to the college community.",
      activities: [
        "Hosted engaging shows on music, campus life, and events",
        "Delivered dynamic and interactive content to listeners",
        "Promoted campus events and activities through radio broadcasts",
        "Developed communication and public speaking skills"
      ],
      skills: ["Public Speaking", "Content Creation", "Event Promotion", "Communication"]
    },
    {
      title: "Coordinator",
      organization: "SplashOut, SVECW",
      duration: "Sep. 2023 – Present",
      location: "Bhimavaram, India",
      icon: <FaUsers />,
      description: "Organizing talent competitions and performing impactful skits, promoting confidence and inspiring messages among students.",
      activities: [
        "Organized talent competitions and cultural events",
        "Performed impactful skits promoting confidence and inspiring messages",
        "Coordinated with student teams and faculty for event management",
        "Promoted student participation in college activities"
      ],
      skills: ["Event Management", "Team Coordination", "Performance", "Student Engagement"]
    }
  ];

  return (
    <LeadershipSection id="leadership" ref={ref}>
      <FloatingElements>
        <FloatingElement
          style={{ top: '20%', right: '8%' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ bottom: '25%', left: '5%' }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <FloatingElement
          style={{ top: '60%', right: '15%' }}
          animate={{
            y: [0, -15, 0],
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
          Leadership & Extracurricular
        </SectionTitle>
        
        <LeadershipGrid>
          {leadershipRoles.map((role, index) => (
            <LeadershipCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Duration>{role.duration}</Duration>
              
              <CardHeader>
                <RoleIcon>
                  {role.icon}
                </RoleIcon>
                <RoleInfo>
                  <RoleTitle>{role.title}</RoleTitle>
                  <Organization>{role.organization}</Organization>
                  <RoleMeta>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      <span>{role.location}</span>
                    </MetaItem>
                    <MetaItem>
                      <FaCalendarAlt />
                      <span>{role.duration}</span>
                    </MetaItem>
                  </RoleMeta>
                </RoleInfo>
              </CardHeader>
              
              <RoleDescription>
                <Description>{role.description}</Description>
                
                <Activities>
                  {role.activities.map((activity, idx) => (
                    <Activity key={idx}>{activity}</Activity>
                  ))}
                </Activities>
                
                <Skills>
                  {role.skills.map((skill, idx) => (
                    <SkillTag key={idx}>{skill}</SkillTag>
                  ))}
                </Skills>
              </RoleDescription>
            </LeadershipCard>
          ))}
        </LeadershipGrid>
      </Container>
    </LeadershipSection>
  );
};

export default Leadership;
