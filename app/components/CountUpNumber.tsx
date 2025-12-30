'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpNumberProps {
  end: number;
  duration?: number; // in seconds
  className?: string;
  suffix?: string;
}

const CountUpNumber = ({ end, duration = 2, className = '', suffix = '+' }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60); // 60 FPS
    
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  
  return (
    <div ref={ref} className={className}>
      {Math.floor(count)}{suffix}
    </div>
  );
};

export default CountUpNumber;