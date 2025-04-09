import React, { useEffect, useState, useRef } from 'react';
import preloaderAudio from '../assets/mp3/preloader.mp3';

function Preloader() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    // Hide preloader on load
    const handleLoad = () => {
      if (preloaderRef.current) {
        setTimeout(() => {
          preloaderRef.current.style.display = 'none';
          setLoading(false);
          document.body.classList.remove('preload');
        }, 1500);
      }
      
      // Play audio if sound toggle is on
      const soundToggle = localStorage.getItem('sound');
      if (soundToggle === 'true' && audioRef.current) {
        audioRef.current.play();
      }
    };

    // Add preload class to prevent animations before page is ready
    document.body.classList.add('preload');
    
    window.addEventListener('load', handleLoad);
    
    // Fallback if 'load' event doesn't fire
    setTimeout(() => {
      if (preloaderRef.current && preloaderRef.current.style.display !== 'none') {
        preloaderRef.current.style.display = 'none';
        setLoading(false);
        document.body.classList.remove('preload');
      }
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.body.classList.remove('preload');
    };
  }, []);

  if (!loading) return null;

  return (
    <>
      <audio id="preloader-audio" ref={audioRef}>
        <source src={preloaderAudio} type="audio/mp3" />
      </audio>
      <div id="preloader" ref={preloaderRef}>
        <div className="preloader-content">
          <div className="preloader-spinner"></div>
        </div>
      </div>
      <noscript>Allow Javascript</noscript>
    </>
  );
}

export default Preloader; 