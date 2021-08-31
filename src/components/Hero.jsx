import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { Button } from '@material-ui/core';
import gsap from 'gsap';
// import { ErickSilvaCV, getProps } from '../data/erick-silva-cv.pdf';
// import { saveAs } from 'file-saver';
// import { pdf } from '@react-pdf/renderer';

export default function Header() {
  let title = useRef(null);
  useEffect(() => {
    gsap.to(title, { duration: 0.7, opacity: 1, y: -20, ease: 'sine.inOut' });
    gsap.fromTo(
      '.profile-pic',
      { width: 0, opacity: 0 },
      { delay: 0.5, duration: 1, opacity: 1, width: 490, ease: 'sine' },
    );
    gsap.fromTo(
      '.background',
      { opacity: 0 },
      { delay: 1.2, duration: 0.5, opacity: 1, y: -20, ease: 'sine' },
    );
    gsap.fromTo(
      '.cv-btn',
      { opacity: 0 },
      { delay: 1.5, duration: 0.2, opacity: 1, y: -20, ease: 'sine' },
    );
  }, []);

  let imgHeight = window.matchMedia("(max-width: 1024px) and (max-height: 1366px)").matches ? 60 : 85;

  imgHeight = window.matchMedia("(max-width: 768px) and (max-height: 1024px)").matches ? 45 : imgHeight;

  // const getCV = async () => {
  //   const props = await getProps();
  //   const doc = <ErickSilvaCV {...props} />;
  //   const asPdf = pdf({});
  //   asPdf.updateContainer(doc);
  //   const blob = await asPdf.toBlob();
  //   saveAs(blob, 'erick-da-silva-pereira-cv.pdf');
  // }

  return (
    <main className="main-page">
      <Parallax
        strength={ 800 }
        className="background"
        renderLayer={ (percentage) => (
          <div
            style={ {
              height: percentage * window.innerHeight - 10,
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
          I&apos;m Erick
          <br />
          {' '}
          Silva
        </h1>
        <a href="/files/erick-silva-cv.png" download>
          <Button
          className="cv-btn"
          >
            Download CV
          </Button>
        </a>
      </div>
      <Parallax
        strength={ 400 }
        bgImage="images/profile-picture.jpg"
        bgImageStyle={ { height: `${imgHeight}vh` } }
        className="profile-pic"
        style={ {
          transform: 'scaleX(-1)',
          marginRight: '7vw',
        } }
      >
        <div className="profile-pic" style={ { height: `${imgHeight}vh` } } />
      </Parallax>
    </main>
  );
}
