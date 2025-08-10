import './Header.css';
import Starburst from '../Starburst';
import logo from '../../assets/logo.svg';

function Header({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="spacer"></div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
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
