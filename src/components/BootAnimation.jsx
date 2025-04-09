import React, { useEffect, useState } from 'react';

function BootAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="boot-animation">
      <div className="boot-grid"></div>
      <div className="boot-particles">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      <div className="boot-logo"></div>
      <div className="boot-scanline"></div>
      <div className="boot-content">
        <div className="boot-text">Initializing Portfolio...</div>
        <div className="boot-progress"></div>
      </div>
      <div className="boot-status">System: Online // Status: Ready</div>
    </div>
  );
}

export default BootAnimation; 