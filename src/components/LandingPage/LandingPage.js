import React from 'react';
import './LandingPage.scss';
import Navbar from '../Navbar/NavigationBar';
import TimeLine from '../Timeline/Timeline';
import Timeline02 from '../../reusableComponents/ReuseTimeLine';
import MediaCarousel from '../../reusableComponents/MediaCarousel';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='row rows'>
                <div className='col-md-2 columns'>
                    <Timeline02 />
                </div>
                <div className='col-md-6 columns'>
                        //Threeway accordium
                </div>
                <div className='col-md-4 columns'>
                        <MediaCarousel/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;