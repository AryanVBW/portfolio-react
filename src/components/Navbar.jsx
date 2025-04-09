import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/png/logo-vivek.png';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsActive(false);
  }, [location]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Vivek Wagdare Logo" className="nav-logo-img" />
        </Link>

        <div className={`nav-menu ${isActive ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 