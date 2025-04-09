import React, { useEffect } from 'react';

function Cursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-inner';
    document.body.appendChild(cursor);

    const cursorOuter = document.createElement('div');
    cursorOuter.className = 'cursor-outer';
    document.body.appendChild(cursorOuter);

    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorOuter.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const addClickClass = () => {
      cursor.classList.add('click');
      cursorOuter.classList.add('click');
      
      setTimeout(() => {
        cursor.classList.remove('click');
        cursorOuter.classList.remove('click');
      }, 500);
    }
    
    const addHoverClass = () => {
      cursor.classList.add('hover');
      cursorOuter.classList.add('hover');
    }
    
    const removeHoverClass = () => {
      cursor.classList.remove('hover');
      cursorOuter.classList.remove('hover');
    }

    document.addEventListener('mousemove', positionElement);
    document.addEventListener('mousedown', addClickClass);
    
    const hoverElements = document.querySelectorAll('a, button, .hover-this');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', addHoverClass);
      element.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      document.removeEventListener('mousemove', positionElement);
      document.removeEventListener('mousedown', addClickClass);
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', addHoverClass);
        element.removeEventListener('mouseleave', removeHoverClass);
      });
      
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOuter);
    };
  }, []);

  return null;
}

export default Cursor; 