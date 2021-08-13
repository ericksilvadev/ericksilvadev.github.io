import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';
import { Project } from '../components';

export default function Projects() {
  let paragraph = useRef(null);
  useEffect(() => {
    gsap.to(paragraph, { duration: 2, opacity: 1, y: -20, ease: 'Power3.inOut' });
  }, []);

  return (
    <div className="projects-page" ref={ (e) => { paragraph = e; } }>
      <Project />
    </div>
  );
}
