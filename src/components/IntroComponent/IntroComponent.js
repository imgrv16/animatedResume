import React from "react";
import './IntroComponent.css';

const IntroCard = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="intro-card">
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
                <h2 className="intro-title">Gaurav Anand</h2>
                <p className="intro-text">
                    Gaurav Anand is an experienced Application Development Analyst with
                    3.5 years in the IT industry, specializing in web application
                    development using ReactJS. He has worked with leading organizations
                    such as Accenture and Infosys, contributing to multiple projects that
                    required designing and implementing complex UI components. Gaurav
                    possesses expertise in technologies like ReactJS, React Hooks, HTML5,
                    SASS, JavaScript, TypeScript, and JSON. His proficiency extends to
                    testing frameworks like Jest and Enzyme, along with UI libraries such
                    as MaterialUI and AntDesign. Additionally, he has hands-on experience
                    with D3.js for data visualization. Throughout his career, he has
                    successfully led and mentored teams, implemented API integrations,
                    managed state using React Context API, and worked on
                    accessibility-focused UX enhancements. His problem-solving ability,
                    coupled with a strong analytical mindset and a passion for
                    innovation, has enabled him to deliver high-quality, scalable, and
                    user-friendly applications across various domains.
                </p>
            </div>
        </div>

    );
};

export default IntroCard;

