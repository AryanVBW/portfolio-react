import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'; // Combined CSS with all styles
import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false, 
  mirror: true,
  offset: 50
});

// Make AOS globally available
window.AOS = AOS;

// Document ready
document.addEventListener('DOMContentLoaded', () => {
  // Refresh AOS after a short delay to ensure all elements are loaded
  setTimeout(() => {
    AOS.refresh();
  }, 100);
  
  // Initialize any custom animations
  const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
  
  scrollAnimateElements.forEach(element => {
    observer.observe(element);
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
