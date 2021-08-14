import React from 'react';
import { ReactComponent as Logo } from '../erick-silva-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <Logo className="logo" />
      <div className="header-nav">
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li className="about">
              <a href="#about">About</a>
            </li>
            <li className="projects">
              <a href="#projects">Projects</a>
            </li>
            <li className="contact">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="toggle-dark" />
      </div>
    </header>
  );
}
