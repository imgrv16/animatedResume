import React from 'react';
import './LandingPage.scss';
import Navbar from '../Navbar/NavigationBar';
import TimeLine from '../Timeline/Timeline';
import Timeline02 from '../../reusableComponents/ReuseTimeLine';
import MediaCarousel from '../../reusableComponents/MediaCarousel';
import IntroCard from '../IntroComponent/IntroComponent';

const LandingPage = () => {

    return (
        <div className="landing-page">
            <Navbar />
            <div className='row rows'>
                
                {/* <div className='col-md-2 columns'>
                    <Timeline02 />
                </div> */}
                
                <div className='col-md-7 columns'>
                    <p className='about-me'>
                        <IntroCard/>
                    </p>
                </div>
                <div className='col-md-5 columns'>
                    {/* <MediaCarousel /> */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;