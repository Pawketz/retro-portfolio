import { useState } from 'react';
import './Header.css';
import Starburst from '../Starburst';
import logo from '../../assets/logo.svg';

function Header({ activeSection, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="spacer"></div>
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="nav nav--desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className={`nav nav--mobile ${isMobileMenuOpen ? 'nav--mobile-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item nav-item--mobile ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Starburst fill="var(--primary-orange)" left="115%" top="-5px" transformScale={1} raised={true} />

      </div>
    </header>
  );
}

export default Header;
