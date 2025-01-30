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
      {/* <section id="timeline">
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
      </section> */}

      <ul class="timeline">

        {/* <!-- Item 1 --> */}
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Freelancer</span>
              <span class="time-wrapper"><span class="time">2013 - present</span></span>
            </div>
            <div class="desc">My current employment. Way better than the position before!</div>
          </div>
        </li>

        {/* <!-- Item 2 --> */}
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Apple Inc.</span>
              <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
            </div>
            <div class="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
          </div>
        </li>

        {/* <!-- Item 3 --> */}
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Harvard University</span>
              <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
            </div>
            <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
          </div>
        </li>

      </ul>

    </header>
  );
};

export default TimeLine;
