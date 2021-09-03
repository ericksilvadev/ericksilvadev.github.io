import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Project } from '../components';
import projects from '../data/projects';

export default function Projects() {
  useEffect(() => {
    gsap.fromTo('.projects-title',
      { autoAlpha: 0, x: -20 },
      {
        duration: 0.5,
        autoAlpha: 1,
        x: 0,
        ease: 'none',
        scrollTrigger: {
          id: 'title',
          trigger: '.projects-title',
          start: 'top center',
          toggleActions: 'play none none',
          // markers: true,
        },
      });
  });
  return (
    <div className="projects-page" id="projects">
      <h1 className="projects-title">Projects</h1>
      {projects.map((project, i) => <Project project={ project } id={ i } key={ i } />)}
    </div>
  );
}
