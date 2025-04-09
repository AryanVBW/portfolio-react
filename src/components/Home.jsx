import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeAvatar from '../assets/png/footer-avatar-vivek.png';
import Settings from './Settings';

function Home() {
  useEffect(() => {
    // Custom cursor
    const customCursor = document.querySelector("#cursor");
    const cursorsHidden = document.querySelector(".cursorsHidden");
    
    const positionElement = (e) => {
      const mousePos = {x: e.clientX, y: e.clientY};
      customCursor.style.left = mousePos.x + 'px';
      customCursor.style.top = mousePos.y + 'px';
    };
    
    const makeCursorDisappear = () => {
      customCursor.style.opacity = "0";
    };
    
    const makeCursorVisible = () => {
      customCursor.style.opacity = "1";
    };
    
    window.addEventListener('mousemove', positionElement);
    document.addEventListener('mouseleave', makeCursorDisappear);
    document.addEventListener('mouseenter', makeCursorVisible);
    
    // Eye animation
    const pupil = document.querySelector('.pupil');
    
    if (pupil) {
      document.addEventListener('mousemove', (e) => {
        const x = e.clientX * 30 / window.innerWidth;
        const y = e.clientY * 30 / window.innerHeight;
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', positionElement);
      document.removeEventListener('mouseleave', makeCursorDisappear);
      document.removeEventListener('mouseenter', makeCursorVisible);
      
      if (pupil) {
        document.removeEventListener('mousemove', () => {});
      }
    };
  }, []);

  const handleResumeClick = () => {
    const pdfPath = window.location.origin + '/src/assets/pdf/vivek-resume.pdf';
    window.open(pdfPath, '_blank');
  };

  return (
    <section id="home">
      <div className="cursorsHidden">
        <div id="cursor"></div>
      </div>
      <div className="home-background">
        <div className="home-blob"></div>
      </div>
      <div className="home-foreground">
        <div className="home-content">
          <div className="home-profile-container">
            <div className="home-content-avataar-container">
              <img src={homeAvatar} alt="Animated character" className="home-content-avataar" />
              <div className="eye">
                <div className="pupil"></div>
              </div>
            </div>
            <div className="home-headline-container">
              <div className="home-headline-content">
                <article aria-label="Hello I am">Hello, I am</article>
                <article aria-label="I am Vivek Wagdare">Vivek Wagdare</article>
                <article aria-label="I am a Software developer from Nagpur India. Currently working">
                  Software Developer from Nagpur. <br /> Currently working on Web Development.
                </article>
                <div className="home-projects-button-container">
                  <Link to="/projects">
                    <button className="home-projects-button fas" tabIndex="0"
                      aria-label="Visit projects page">
                      Visit Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 