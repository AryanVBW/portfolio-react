import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Cursor from './Cursor';
import BootAnimation from './BootAnimation';
import Preloader from './Preloader';

function HomePage() {
  useEffect(() => {
    // Initialize AOS on component mount
    if (window.AOS) {
      window.AOS.refresh();
    }
    
    // Activate scroll animations with improved observer
    const animateElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: Remove the active class when element is out of view
          // Uncomment the next line if you want elements to animate again when scrolling back up
          // entry.target.classList.remove('active');
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px' // Triggers animation a bit earlier
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    // Set title
    document.title = 'Vivek W | Portfolio';
    
    // Clean up observer on component unmount
    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Cursor />
      <BootAnimation />
      <Preloader />
      
      <Header />
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage; 