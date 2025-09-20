
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 2rem 2rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
`;

const Greeting = styled(motion.p)`
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #6366f1, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;


const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a1a1aa;
  font-size: 0.9rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  color: #6366f1;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: #6366f1;
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
  padding: 4px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.05); opacity: 0.5; }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: #1a1a1a;
  display: block;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.6;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.6;
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const Triangle = styled(GeometricShape)`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid rgba(99, 102, 241, 0.2);
  background: none;
`;

const Square = styled(GeometricShape)`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
`;

const Hexagon = styled(GeometricShape)`
  width: 30px;
  height: 30px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
`;

const FloatingText = styled(motion.div)`
  position: absolute;
  font-size: 1rem;
  color: rgba(99, 102, 241, 0.3);
  font-weight: 600;
  pointer-events: none;
  user-select: none;
`;

const MorphingShape = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(1px);
`;

const FloatingCube = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  opacity: 0.2;
  transform-style: preserve-3d;
`;

const RotatingRing = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  opacity: 0.1;
`;

const PulsingOrb = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
`;

const FloatingCodeBlock = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: rgba(99, 102, 241, 0.2);
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  pointer-events: none;
  user-select: none;
  backdrop-filter: blur(10px);
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <FloatingElements>
        {/* Glow Effects */}
        <GlowEffect
          style={{ top: '10%', left: '20%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <GlowEffect
          style={{ top: '70%', right: '10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle
            key={`particle-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <Triangle
          style={{ top: '15%', left: '8%' }}
          animate={{
            rotate: [0, 360],
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Square
          style={{ top: '25%', right: '12%' }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <Hexagon
          style={{ top: '65%', left: '15%' }}
          animate={{
            rotate: [0, -360],
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Advanced 3D Morphing Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <MorphingShape
            key={`morph-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 0.8, 1.2, 1],
              rotate: [0, 180, 360, 540, 720],
              borderRadius: ['50%', '20%', '50%', '30%', '50%'],
              opacity: [0.1, 0.3, 0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* 3D Floating Cubes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <FloatingCube
            key={`cube-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              rotateZ: [0, 90, 180, 270, 360],
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Rotating Rings */}
        {Array.from({ length: 5 }).map((_, i) => (
          <RotatingRing
            key={`ring-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 40}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Pulsing Orbs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <PulsingOrb
            key={`orb-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.4, 0.1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Code Blocks */}
        {Array.from({ length: 6 }).map((_, i) => {
          const codeSnippets = [
            'const react = () => {}',
            'function useState() {}',
            'import { motion }',
            'styled-components',
            'useEffect(() => {})',
            'export default App'
          ];
          return (
            <FloatingCodeBlock
              key={`code-${i}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            >
              {codeSnippets[i]}
            </FloatingCodeBlock>
          );
        })}

        {/* Floating Text Elements */}
        <FloatingText
          style={{ top: '20%', right: '25%' }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </FloatingText>
        <FloatingText
          style={{ top: '80%', left: '20%' }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          { }
        </FloatingText>

        {/* Enhanced Original Elements */}
        <FloatingElement
          style={{ top: '20%', left: '10%' }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          style={{ top: '60%', right: '15%' }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <FloatingElement
          style={{ bottom: '30%', left: '20%' }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </FloatingElements>
      
      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Harshitha Paidi
          </Name>
          
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate Computer Science student with a strong foundation in modern web technologies and cloud computing. 
            Top 0.01% achiever in Hackwithinfy 2025, demonstrating exceptional problem-solving skills and competitive programming excellence.
            I love creating innovative solutions, building scalable applications, and turning complex problems into elegant code. 
            Always eager to learn new technologies and contribute to meaningful projects that make a difference.
          </Description>
          
          <ContactInfo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Bhimavaram, Andhra Pradesh</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+91 9866675406</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>harshithapaidi80@gmail.com</span>
            </ContactItem>
          </ContactInfo>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLink
              href="https://github.com/HarshithaPaidi05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/harshitha-paidi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:harshithapaidi80@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        
        <ProfileImage
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ImageContainer
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/image.jpg" alt="Harshitha Paidi" />
          </ImageContainer>
        </ProfileImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
