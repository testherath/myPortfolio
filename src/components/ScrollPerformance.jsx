// src/components/ScrollPerformance.jsx
import { useEffect, useState, useCallback, useRef } from 'react';

export default function ScrollPerformance({ children }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const scrollTimerRef = useRef(null);

  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    
    // Clear the previous timer
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    
    // Set a timer to detect when scrolling stops
    scrollTimerRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [handleScroll]);

  // Reduce rendering when scrolling for better performance
  useEffect(() => {
    if (isScrolling) {
      setShouldRender(false);
    } else {
      // Small delay before rendering again to prevent flickering
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  return shouldRender ? children : (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0d1224',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#7dd3fc',
      fontSize: '0.9rem'
    }}>
      Loading 3D View...
    </div>
  );
}