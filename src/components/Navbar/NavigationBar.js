// import React from "react";
import "./NavigationBar.scss";
// import profilePic from '../images/profilePic.jpg';
// import WorkHistory from '../workhistory/WorkHistory';
// import { Link } from "react-router-dom";
// import TimeLine from '../Timeline/Timeline';
// import {Rain} from 'react-rainfall';

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloudRain } from "react-icons/fa"; // FontAwesome Icon
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icons
// import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Icon */}
      <div className="navbar-icon">
        <FaCloudRain />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className="navbar-menu">
        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/workhistory" onClick={() => setMenuOpen(false)}>Work History</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link to="/timeline" onClick={() => setMenuOpen(false)}>Timeline</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;


