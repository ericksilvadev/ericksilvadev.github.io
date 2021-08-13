import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/gsap-core';

export default function Projects() {
  let paragraph = useRef(null);
  useEffect(() => {
    gsap.to(paragraph, { duration: 2, opacity: 0, y: -20, ease: 'Power3.inOut' })
  }, [])

  return (
    <div className="projects-page" ref={(e) => {paragraph = e}}>
      PROJECTS
    </div>
  )
}