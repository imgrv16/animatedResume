import React from 'react';
import { motion } from 'framer-motion';
import './WorkHistory.scss';

const workExperience = [
  {
    title: 'SkillNavigator - Accenture Project',
    duration: '11/2021 - 4/2022',
    details: [
      'Created a web application tool for tracking skillset training schedules.',
      'Developed complex components for managing certifications and scheduling.',
      'Implemented validation for date and time slot availability.',
      'Built custom MaterialUI forms using TypeScript and JavaScript.',
      'Collaborated with the design team and mentored junior teammates.',
    ],
  },
  {
    title: 'Employee Connect Portal - Accenture Project',
    duration: '07/2021 - 11/2021',
    details: [
      'Developed responsive web-based interfaces using ReactJS, HTML, and CSS.',
      'Built independent single-page components for SharePoint integration.',
      'Used MaterialUI to create custom tables and accordions.',
    ],
  },
  // Add other experiences here
];

const WorkHistory = () => {
  return (
    <section id="work" className="work-history">
      <h2>Work History</h2>
      <div className="timeline">
        {workExperience.map((job, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-title">
              <h3>{job.title}</h3>
              <span>{job.duration}</span>
            </div>
            <ul className="timeline-details">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
