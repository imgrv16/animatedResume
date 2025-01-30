import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavigationBar';
import WorkHistory from './components/workhistory/WorkHistory';
import Skills from './components/skill/Skill';
import Education from './components/education/Education';
import TimeLine from './components/Timeline/Timeline';
import Rain from './reusableComponents/Rain';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';  

const App = () => {
  return (
    <div className="app-container">
      <Rain />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/workhistory" element={<WorkHistory />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/timeLine" element={<TimeLine />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
