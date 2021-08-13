import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let subtitle = useRef(null);
  let title = useRef(null);
  let paragraph = useRef(null);
  useEffect(() => {
    const toggleActions = 'play none none reverse';
    gsap.fromTo(title,
      { autoAlpha: 0 },
      {
        duration: 0.5,
        autoAlpha: 1,
        x: 20,
        ease: 'none',
        scrollTrigger: {
          id: 'title',
          trigger: title,
          start: 'top center',
          toggleActions,
          // markers: true,
        },
      });
    gsap.fromTo(subtitle,
      { autoAlpha: 0 },
      {
        duration: 0.5,
        autoAlpha: 1,
        x: -20,
        ease: 'none',
        scrollTrigger: {
          id: 'subtitle',
          trigger: subtitle,
          start: 'top center',
          toggleActions,
          // markers: true,
        },
      });
    gsap.fromTo(paragraph,
      { autoAlpha: 0 },
      {
        duration: 0.5,
        autoAlpha: 1,
        ease: 'none',
        x: -20,
        scrollTrigger: {
          id: 'paragraph',
          trigger: paragraph,
          start: 'top center+=150',
          toggleActions,
          // markers: true,
        },
      });
  }, []);

  return (
    <div className="about-page">
      <h1 className="about-title" ref={ (e) => title = e }>About me</h1>
      <h3 className="about-subtitle" ref={ (e) => subtitle = e }>
        I am a Frontend developer, currently specializing in ReactJS.
      </h3>
      <p className="about-paragraph" ref={ (e) => paragraph = e }>
        I&apos;m 22 years old and currently live in Brazil.
        {' '}
        <br />
        Studying Software Development since april 2021, I found myself completely
        in love with this area during this year.
        {' '}
        <br />
        This is a space for me to show some
        of my work and evolution throughout these months.
        {' '}
        <br />
        You can find more projects on
        {' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/ericksilvadev">my GitHub page</a>
        .

      </p>
    </div>
  );
}
