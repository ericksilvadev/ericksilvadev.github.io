import React, { useState } from 'react';

export default function BackToTop() {
  const [screenPos, setScreenPos] = useState();

  window.onscroll = () => {
    setScreenPos(window.pageYOffset);
  };
  const showIcon = screenPos > 1000 ? 'show' : '';
  return (
    <a href="#home" className={`${showIcon} back-top fas fa-chevron-up`} />
  );
}
