import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';

const Scrolling = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      textRef.current.style.transform = `translateX(${scrollTop * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollingContainer}>
      <h1 ref={textRef}>Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack</h1>
    </div>
  );
};

export default Scrolling;
