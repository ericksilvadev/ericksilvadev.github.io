import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { Button } from '@material-ui/core';
import gsap from 'gsap';

export default function Header() {
  let title = useRef(null);
  let profilePic = useRef(null);
  useEffect(() => {
    gsap.to(title, { duration: 1.2, opacity: 1, y: -20, ease: 'sine.inOut' })
    gsap.to(profilePic, { duration: 2, opacity: 1, y: -20, ease: 'Power3.inOut' })
  }, []);

  return (
    <main className="main-page">
      <Parallax
        strength={ 800 }
        renderLayer={(percentage) => (
          <div
            style={{
              height: percentage * 940,
              backgroundColor: '#7CA9C1',
            }}
          />
        )}
        style={{
          backgroundColor: '#7CA9C1',
          position: 'absolute',
          minHeight: '95vh',
          width: '76vw',
          zIndex: -1,
          right: 0,
        }}
      />
      <div className="main-content">
        <h1 className="title" ref={(el) => title = el}>Hello,<br /> I'm Erick<br /> Silva</h1>
        <Button variant="contained" color="primary">Download CV</Button>
      </div>
      <Parallax
        strength={ 400 }
        bgImage="images/profile-picture.jpg"
        bgImageStyle={{ height: '85vh'}}
        style={{
          transform: 'scalex(-1)',
          marginRight: '7vw',
        }}
      >
        <div ref={(el) => profilePic = el} className="profile-pic" style={{ height: '85vh', width: '560px' }}></div>
      </Parallax>
    </main>
  );
}
