import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;


const NavLinks = styled(motion.ul)`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  list-style: none;
  gap: 1.5rem;
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 250px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(99, 102, 241, 0.2);
    min-width: auto;
    padding: 2rem 1rem;
    gap: 0.5rem;
    background: rgba(10, 10, 10, 0.99);
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: all 0.3s ease;
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    white-space: nowrap;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
    &:hover {
      color: #6366f1;
      background: rgba(99, 102, 241, 0.1);
    }
    
    &:active {
      background: rgba(99, 102, 241, 0.2);
      transform: scale(0.98);
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 1.2rem 1rem;
      text-align: center;
      width: 100%;
      border-radius: 12px;
      margin-bottom: 0.5rem;
      font-weight: 600;
      
      &:hover {
        background: rgba(99, 102, 241, 0.15);
      }
      
      &:active {
        background: rgba(99, 102, 241, 0.25);
        transform: scale(0.95);
      }
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: flex;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;
  padding: 12px;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
  }
  
  &:active {
    background: rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 14px;
  }
`;

const MenuLine = styled.span`
  width: 100%;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
    transform: ${props => props.isOpen ? 'translateX(20px)' : 'none'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
  }
`;


const Header = ({ currentSection, setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(() => [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Education', id: 'education', href: '#education' },
    { name: 'Certifications', id: 'certifications', href: '#certifications' },
    { name: 'Leadership', id: 'leadership', href: '#leadership' },
    { name: 'Contact', id: 'contact', href: '#contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is currently in view
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }));

      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setCurrentSection(current.id);
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleTouchOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setCurrentSection, isMobileMenuOpen, navItems]);

  const handleNavClick = (sectionId, href) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer
      scrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <NavLinks isOpen={isMobileMenuOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                style={{ 
                  color: currentSection === item.id ? '#6366f1' : '#ffffff',
                  fontWeight: currentSection === item.id ? '600' : '500'
                }}
              >
                {item.name}
              </a>
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <MenuLine isOpen={isMobileMenuOpen} />
          <MenuLine isOpen={isMobileMenuOpen} />
          <MenuLine isOpen={isMobileMenuOpen} />
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
