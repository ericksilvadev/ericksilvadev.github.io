import React from 'react';
import { Parallax } from 'react-parallax';
import { Button } from '@material-ui/core';

export default function Header() {
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
        <h1 className="title">Hello,<br /> I'm Erick<br /> Silva</h1>
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
        <div style={{ height: '85vh', width: '560px' }}></div>
      </Parallax>
    </main>
  );
}
