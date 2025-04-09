import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navAvatar from '../assets/png/nav-avatar.png';

function Header() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Update active tab based on location (for handling direct URL visits)
  useEffect(() => {
    const hash = location.hash || '#home';
    const section = hash.substring(1); // Remove the # from the hash
    if (section) {
      setActiveTab(section);
    }
  }, [location]);

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
      const mobileNavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      // Update mobile menu active tab
      mobileNavLi.forEach((li) => {
        li.classList.remove('activeThismobiletab');
        if (li.classList.contains(current)) {
          li.classList.add('activeThismobiletab');
        }
      });

      // Update desktop menu active tab
      navLi.forEach((li) => {
        li.classList.remove('activeThistab');
        if (li.classList.contains(current)) {
          li.classList.add('activeThistab');
        }
      });

      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('stopscrolling');
  };

  // Hide mobile menu (when clicking on a menu item)
  const hideMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('stopscrolling');
  };

  return (
    <header>
      <div className="navbar" id="navbar">
        <div className="hey">Hey!</div>
        <div className="logo" tabIndex="0" aria-label="Vivek W logo">
          <div className="logo-top">
            <img src={navAvatar} alt="animation-head" id="nav-avatar"/>
          </div>
        </div>
        <div className="navbar-tabs" id="navbar-tabs">
          <ul className="navbar-tabs-ul">
            <li className={`home ${activeTab === 'home' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="100">
              <a href="#home" tabIndex="0" aria-label="Home menu button">
                &#60;/Home&#62;
              </a>
            </li>

            <li className={`about ${activeTab === 'about' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="300">
              <a href="#about" aria-label="about menu button">
                &#60;/AboutMe&#62;
              </a>
            </li>

            <li className={`skills ${activeTab === 'skills' ? 'activeThistab' : ''}`} data-aos="fade-down" data-aos-delay="500">
              <a href="#skills" aria-label="skills menu button">
                &#60;/Skills&#62;
              </a>
            </li>

            <li className="projects" data-aos="fade-down" data-aos-delay="700">
              <Link to="/projects" tabIndex="0" aria-label="Projects menu button">
                &#60;/Projects&#62;
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hamburger" id="hamburger" data-aos="fade">
        <div className="hamburgerbase">
          <button 
            id="hamburger-button" 
            onClick={toggleMobileMenu}
            tabIndex="0" 
            aria-label="Menu Button"
          >
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation1' : ''}`} id="burger-bar1"></span>
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation2' : ''}`} id="burger-bar2"></span>
            <span className={`burger-bar ${mobileMenuOpen ? 'hamburger-animation3' : ''}`} id="burger-bar3"></span>
          </button>
        </div>
      </div>
   
      <div className={`mobiletogglemenu ${mobileMenuOpen ? 'show-toggle-menu' : ''}`} id="mobiletogglemenu">
        <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
          <li 
            id="home-mobile-tab" 
            className={`mobile-navbar-tabs-li home ${activeTab === 'home' ? 'activeThismobiletab' : ''}`} 
            onClick={hideMobileMenu}
          >
            <a href="#home" tabIndex="0" aria-label="Home menu button">
              &#60;/Home&#62;
            </a>
          </li>

          <li 
            id="aboutme-mobile-tab" 
            className={`mobile-navbar-tabs-li about ${activeTab === 'about' ? 'activeThismobiletab' : ''}`} 
            onClick={hideMobileMenu}
          >
            <a href="#about" tabIndex="0" aria-label="about menu button">
              &#60;/AboutMe&#62;
            </a>
          </li>
          
          <li 
            id="skills-mobile-tab" 
            className={`mobile-navbar-tabs-li skills ${activeTab === 'skills' ? 'activeThismobiletab' : ''}`} 
            onClick={hideMobileMenu}
          >
            <a href="#skills" tabIndex="0" aria-label="skills menu button">
              &#60;/Skills&#62;
            </a>
          </li>
          
          <li 
            id="projects-mobile-tab" 
            className="mobile-navbar-tabs-li projects" 
            onClick={hideMobileMenu}
          >
            <Link to="/projects" tabIndex="0" aria-label="projects menu button">
              &#60;/Projects&#62;
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header; 