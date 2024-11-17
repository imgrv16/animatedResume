import React from 'react';
import { motion } from 'framer-motion';
import './Skill.scss';

const skills = [
  'ReactJS', 'React Hooks', 'HTML5', 'SASS', 'JavaScript', 'TypeScript', 
  'MaterialUI', 'D3.js', 'Jest', 'Enzyme'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <motion.div 
            className="skill-card" 
            whileHover={{ scale: 1.1 }} 
            key={skill}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
