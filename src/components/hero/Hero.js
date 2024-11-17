import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Gaurav Anand</h1>
        <p>A ReactJS Developer with 3.5 years of experience in design and development.</p>
        <ul className="professional-summary">
          <li>Involved in design and development of web applications with ReactJS.</li>
          <li>Resolved user problems, increasing satisfaction and loyalty.</li>
          <li>
            Demonstrated excellent analytical, organizational, and interpersonal skills while striving to achieve
            organizational goals.
          </li>
        </ul>
        <nav className="hero-navigation">
          {/* <a href="#work" className="nav-link">Work History</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a> */}
        </nav>
      </motion.div>
    </section>
  );
};

export default Hero;
