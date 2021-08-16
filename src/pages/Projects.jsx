import React, { useEffect } from 'react';
import { Project } from '../components';
import { gsap } from 'gsap';
import projects from '../data/projects';

export default function Projects() {
  useEffect(() => {
    gsap.fromTo('.projects-page',
      { autoAlpha: 0 },
      {
        duration: 0.5,
        autoAlpha: 1,
        x: 20,
        ease: 'none',
        scrollTrigger: {
          id: 'title',
          trigger: '.projects-page',
          start: 'top center',
          toggleActions: 'play none none',
          // markers: true,
        },
    });
  })
  return (
    <div className="projects-page" id="projects">
      <h1>Projects</h1>
      {projects.map((project, i) => <Project project={ project } id={ i } key={ i } />)}
    </div>
  );
}
