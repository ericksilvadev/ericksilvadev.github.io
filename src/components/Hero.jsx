import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { Button } from '@material-ui/core';
import gsap from 'gsap';

export default function Header() {
  let title = useRef(null);
  useEffect(() => {
    gsap.to(title, { duration: 0.7, opacity: 1, y: -20, ease: 'sine.inOut' });
    gsap.fromTo(
      '.profile-pic',
      { width: 0, opacity: 0 },
      { delay: 0.8, duration: 1, opacity: 1, width: 490, ease: 'sine' },
    );
    gsap.fromTo(
      '.background',
      { opacity: 0 },
      { delay: 1.6, duration: 0.5, opacity: 1, y: -20, ease: 'sine' },
    );
    gsap.fromTo(
      '.cv-btn',
      { opacity: 0 },
      { delay: 2, duration: 0.2, opacity: 1, y: -20, ease: 'sine' },
    );
  }, []);

  return (
    <main className="main-page">
      <Parallax
        strength={ 800 }
        className="background"
        renderLayer={ (percentage) => (
          <div
            style={ {
              height: percentage * 940,
              backgroundColor: '#7CA9C1',
            } }
          />
        ) }
        style={ {
          backgroundColor: '#7CA9C1',
          position: 'absolute',
          minHeight: '95vh',
          width: '76vw',
          zIndex: -1,
          right: 0,
        } }
      />
      <div className="main-content">
        <h1 className="title" ref={ (el) => title = el }>
          Hello,
          <br />
          {' '}
          I&apos;m Erick
          <br />
          {' '}
          Silva
        </h1>
        <Button className="cv-btn" variant="contained" color="primary">
          Download CV
        </Button>
      </div>
      <Parallax
        strength={ 400 }
        bgImage="images/profile-picture.jpg"
        bgImageStyle={ { height: '85vh' } }
        className="profile-pic"
        style={ {
          transform: 'scaleX(-1)',
          marginRight: '7vw',
        } }
      >
        <div className="profile-pic" style={ { height: '85vh', width: '560px' } } />
      </Parallax>
    </main>
  );
}
