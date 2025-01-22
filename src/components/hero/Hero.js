import React from "react";
import "./Hero.scss";
import profilePic from '../images/profilePic.jpg';
import WorkHistory from '../workhistory/WorkHistory';
import { Link } from "react-router-dom";
import TimeLine from '../Timeline/Timeline';

// animatedResume\src\components\images\profilePic.jpg
// C:\Users\g.d.anand\OneDrive - Accenture\Documents\NewProject\animatedResume\src\components\images\profilePic.jpg
const Hero = () => {
  return (
    <section className="hero">
      {/* Header Section */}
      <header className="hero-header">
        <div className="hero-logo-container">
          <img
            src="path/to/logo.png"
            alt="Logo"
            className="hero-logo"
          />
          <h1 className="hero-name">Gaurav</h1>
        </div>
        <nav className="hero-nav">
          {/* <a href="#home" className="hero-link">Home</a> */}
          {/* <Link to="/timeline" className="hero-link">TimeLine</Link> */}
          <Link to="/skills" className="hero-link">Skills</Link>
          <Link to="/workhistory" className="hero-link">WorkHistory</Link>
          <Link to="/education" className="hero-link">Education</Link>
          {/* <a href="#about" className="hero-link">About</a> */}
          {/* <a href="#contact" className="hero-link">Contacts</a> */}
          <Link to="/skills" className="hero-link">Contacts</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="hero-content">
        <div className="col-md-4 timeline-container">
              <TimeLine />
        </div>
        <div className="hero-text">
            <h2 className="hero-title">I am Gaurav Anand, Based out of Delhi, India</h2>
            <p className="hero-subtitle">
              I am currently working as Web Developer specialized on reactJs and frontend tools
            </p>
          </div>
        <div className="hero-image-container">
          <img
            src={profilePic}
            alt="Profile"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
