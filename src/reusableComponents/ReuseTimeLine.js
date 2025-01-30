import React, { useState, useEffect } from 'react';
import './ReuseTimeLine.scss';
import timelineData from '../../src/components/Data/data.json';

const Timeline02 = () => {

    const [workExperience, setWorkExperience] = useState([]);

    // Set the work experience data on component mount
    useEffect(() => {
        setWorkExperience(timelineData.workExperience);
    }, []);

    return (
        <div>
            <header>
                {/* {workExperience.map((experience, index) => (
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
        ))} */}
                <div class="hearts">
                    {
                        workExperience.map((experience, index) => (
                            <div className='timeLineList' key={index}>
                                <span> <i>{experience.title} ,  {experience.duration}</i></span>
                                {/* <span> <i>DURATION -> {experience.duration}</i></span> */}
                            </div>
                        ))
                    }
                </div>
            </header>
        </div>
    );
};

export default Timeline02;