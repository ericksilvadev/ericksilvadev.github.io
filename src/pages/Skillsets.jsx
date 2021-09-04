import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Skillsets() {
  useEffect(() => {
    gsap.fromTo('.skillsets-title',
    { autoAlpha: 0, x: -20 },
    {
      duration: 0.5,
      autoAlpha: 1,
      x: 0,
      ease: 'none',
      scrollTrigger: {
        id: 'title',
        trigger: '.skillsets-title',
        start: 'top center',
        toggleActions: 'play none none',
      },
    });
    gsap.fromTo('.secondary-skills',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        opacity: 1,
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-skills',
          start: 'top center+=200',
          toggleActions: 'play none none',
        },
      });
    gsap.fromTo('.main1',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: .5,
        opacity: 1,
        delay: .5,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-skills',
          start: 'top center+=200',
          toggleActions: 'play none none',
        },
      });
      gsap.fromTo('.main2',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: .5,
        opacity: 1,
        delay: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-skills',
          start: 'top center+=200',
          toggleActions: 'play none none',
        },
      });
      gsap.fromTo('.main3',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: .5,
        opacity: 1,
        delay: 1.5,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-skills',
          start: 'top center+=200',
          toggleActions: 'play none none',
        },
      });
      gsap.fromTo('.main4',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: .5,
        opacity: 1,
        delay: 2,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-skills',
          start: 'top center+=200',
          toggleActions: 'play none none',
        },
      });
  }, []);
  return (
    <div className="skillsets">
      <h1 className="skillsets-title">My Skillsets</h1>
      <ul className="secondary-skills">
        <li><img src="/images/redux.svg" alt="" /></li>
        <li><img src="/images/jest-icon.svg" alt="" /></li>
      </ul>
      <ul className="main-skills">
        <li className="fab main1 fa-html5" />
        <li className="fab main2 fa-js" />
        <li className="fab main3 fa-react" />
        <li className="fab main4 fa-sass" />
      </ul>
      <ul className="secondary-skills">
        <li className="fab fa-github" />
        <li className="fab fa-git-alt" />
      </ul>
    </div>
  );
}
