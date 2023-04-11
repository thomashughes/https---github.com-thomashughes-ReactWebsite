import React from 'react';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';import './hero.css';



function Hero(props) {
  const heroRef = useRef(null);

  useEffect(() => {
    // Scroll effect for hero background
    const heroBg = document.querySelector('.hero-bg');
    const heroHeight = heroRef.current.clientHeight;
    const herotitle = document.querySelector('.hero-title');
    const herosubtitle = document.querySelector('.hero-subtitle');

    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      const opacity = 1 - (scrollPos / heroHeight);
      herotitle.style.opacity = opacity.toFixed(2);
      herosubtitle.style.opacity = opacity.toFixed(2);
      heroBg.style.opacity = opacity.toFixed(2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
<div className="hero-bg" style={{ backgroundImage: `url(${props.background})` }} />
      <motion.h1 className="hero-title" animate="{{x: 500}}">
        {props.heroTitle}<h1>
        <span id='italic'>{props.heroTitleItalic}</span>
      </h1>
      </motion.h1>
      <h2 className="hero-subtitle">{props.heroSub}</h2>
    </div>
  );
}

export default Hero;
