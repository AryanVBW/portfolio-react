import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Footer from './Footer';
import Cursor from './Cursor';
import navAvatar from '../assets/png/nav-avatar.png';

function ProjectsPage() {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init();
    }
    
    // Set title
    document.title = 'Vivek W | Projects';
    
    // Set up any other animations or interactions
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      // Clean up
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="projects-page">
      <Cursor />
      
      <header>
        <div className="navbar" id="navbar">
          <Link to="/" className="logo" tabIndex="0" aria-label="Vivek W logo">
            <div className="logo-top">
              <img src={navAvatar} alt="animation-head" id="nav-avatar"/>
            </div>
          </Link>
          <div className="navbar-tabs" id="navbar-tabs">
            <ul className="navbar-tabs-ul">
              <li className="home" data-aos="fade-down" data-aos-delay="100">
                <Link to="/" tabIndex="0" aria-label="Home menu button">
                  &#60;/Home&#62;
                </Link>
              </li>
              <li className="projects activeThistab" data-aos="fade-down" data-aos-delay="700">
                <Link to="/projects" tabIndex="0" aria-label="Projects menu button">
                  &#60;/Projects&#62;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      <main>
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default ProjectsPage; 