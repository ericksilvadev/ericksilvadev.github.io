import React from 'react';
import { ReactComponent as Logo } from '../erick-silva-logo.svg';

export default function Header() {
  return(
    <header className="header">
      <Logo className="logo" />
      <div className="header-nav">
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li className="about">About</li>
            <li className="projects">Projects</li>
            <li className="contact">Contact</li>
          </ul>
        </nav>
        <div className="toggle-dark" />
      </div>
    </header>
  )
}

