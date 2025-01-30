import React from 'react';
import './LandingPage.scss';
import Navbar from '../Navbar/NavigationBar';
import TimeLine from '../Timeline/Timeline';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='row rows'>
                <div className='col-md-3 columns'>
                    {/* <TimeLine /> */}
                </div>
                <div className='col-md-5 columns'>
                        //Threeway animation
                </div>
                <div className='col-md-4 columns'>
                        //Threeway accordium
                </div>
            </div>
        </div>
    );
};

export default LandingPage;