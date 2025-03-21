import React, { useState, useEffect } from 'react';
import './ReuseTimeLine.scss';
import timelineData from '../../src/components/Data/data.json';
import skills from '../../src/components/Data/skillSet.json';

const Timeline02 = () => {

    const [skillSet, setSkillSet] = useState([]);

    // Set the work experience data on component mount
    useEffect(() => {
        setSkillSet(skills.skills);
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
                {/* <div class="hearts">
                    {
                        skillSet.map((skill, index) => (
                            <div className='timeLineList' key={index}>
                                <span> <i>{skill}</i></span>
                            </div>
                        ))
                    }
                </div> */}
                <div class="hearts">
                    <span>
                        {
                            skillSet.map((skill, index) => (
                                <div className='timeLineList' key={index}>
                                    <span><i>❤️{skill}❤️</i></span>
                                </div>
                            ))
                        }
                    </span>
                </div>
            </header>
        </div>
    );
};

export default Timeline02;