import React from 'react';
// import gsap from 'gsap/gsap-core';
import { Project } from '../components';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className="projects-page" id="projects">
      <h1>Projects</h1>
      {projects.map((project, i) => <Project project={ project } key={ i } />)}
    </div>
  );
}
