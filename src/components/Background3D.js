import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.6;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  opacity: 0.1;
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const Triangle = styled(GeometricShape)`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid rgba(99, 102, 241, 0.2);
  background: none;
`;

const Square = styled(GeometricShape)`
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
`;

const Hexagon = styled(GeometricShape)`
  width: 40px;
  height: 40px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const GlowOrb = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
`;

const FloatingText = styled(motion.div)`
  position: absolute;
  font-size: 1.2rem;
  color: rgba(99, 102, 241, 0.2);
  font-weight: 600;
  pointer-events: none;
  user-select: none;
  font-family: 'Space Grotesk', sans-serif;
`;

const MorphingSphere = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(2px);
`;

const FloatingTorus = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  opacity: 0.1;
  transform-style: preserve-3d;
`;

const SpinningCube = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  opacity: 0.1;
  transform-style: preserve-3d;
`;

const FloatingPyramid = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid rgba(99, 102, 241, 0.2);
  opacity: 0.1;
`;

const PulsingWave = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
  border-radius: 2px;
  filter: blur(1px);
`;

const Background3D = () => {
  return (
    <BackgroundContainer>
      {/* Glow Orbs */}
      {Array.from({ length: 3 }).map((_, i) => (
        <GlowOrb
          key={`glow-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating particles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <FloatingParticle
          key={`particle-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const shapes = [Triangle, Square, Hexagon];
        const ShapeComponent = shapes[i % shapes.length];
        return (
          <ShapeComponent
            key={`geometric-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -40, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      {/* Advanced 3D Morphing Spheres */}
      {Array.from({ length: 10 }).map((_, i) => (
        <MorphingSphere
          key={`sphere-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.8, 0.6, 1.4, 1],
            rotate: [0, 180, 360, 540, 720],
            borderRadius: ['50%', '30%', '50%', '20%', '50%'],
            opacity: [0.1, 0.3, 0.05, 0.25, 0.1],
            x: [0, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 60 - 30, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* 3D Floating Torus */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingTorus
          key={`torus-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 30}px`,
            height: `${50 + Math.random() * 30}px`,
          }}
          animate={{
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180, 270, 360],
            scale: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.1, 0.3, 0.1, 0.2, 0.1],
            y: [0, -40, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Spinning Cubes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <SpinningCube
          key={`spinning-cube-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotateX: [0, 360, 720],
            rotateY: [0, 360, 720],
            rotateZ: [0, 180, 360],
            scale: [1, 1.3, 0.7, 1.1, 1],
            opacity: [0.1, 0.4, 0.1, 0.3, 0.1],
            y: [0, -50, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating Pyramids */}
      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingPyramid
          key={`pyramid-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 0.8, 1.2, 1],
            opacity: [0.1, 0.3, 0.1, 0.25, 0.1],
            y: [0, -30, 0],
            x: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Pulsing Waves */}
      {Array.from({ length: 5 }).map((_, i) => (
        <PulsingWave
          key={`wave-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating Text Elements */}
      {Array.from({ length: 6 }).map((_, i) => {
        const texts = ['</>', '{ }', '()', '[]', '=>', '++'];
        return (
          <FloatingText
            key={`text-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {texts[i]}
          </FloatingText>
        );
      })}
      
      {/* Original Floating shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingShape
          key={`shape-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 40}px`,
            height: `${40 + Math.random() * 40}px`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default Background3D;
