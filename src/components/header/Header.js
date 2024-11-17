import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Gaurav Anand</h1>
      <nav>
        <a href="#work">Work History</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
