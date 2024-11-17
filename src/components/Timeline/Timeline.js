import React, { useEffect, useState } from 'react';
import './Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import the FontAwesomeIcon component
import { faTimeline } from '@fortawesome/free-solid-svg-icons';     

// Simulate importing the JSON data (you would import it in a real project)
import timelineData from '../Data/data.json';

const TimeLine = () => {
  const [workExperience, setWorkExperience] = useState([]);

  // Set the work experience data on component mount
  useEffect(() => {
    setWorkExperience(timelineData.workExperience);
  }, []);

  return (
    <header className="header">
      <section id="timeline">
        {workExperience.map((experience, index) => (
          <div key={index} className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: `url(https://placeimg.com/801/801/nature)` }}></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">{experience.duration}</p>
            </div>
            <div className="tl-content">
            <FontAwesomeIcon className='fa-icon' icon={faTimeline} />
              <div className='content-embedded'>
                <h1>{experience.title}</h1>
                <p>{experience.details.join(' ')}</p>
              </div>

            </div>
          </div>
        ))}
      </section>
    </header>
  );
};

export default TimeLine;
