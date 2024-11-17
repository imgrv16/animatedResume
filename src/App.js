import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import WorkHistory from './components/workhistory/WorkHistory';
import Skills from './components/skill/Skill';
import Education from './components/education/Education';
import Header from './components/header/Header';
// import './App.scss';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/work" element={<WorkHistory />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/education" element={<Education />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hero from './components/Hero';
// import WorkHistory from './components/WorkHistory';
// import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/workhistory" element={<WorkHistory />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;

