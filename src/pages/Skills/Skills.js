import React from 'react';
import { FaTools } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { RiCodeBoxFill } from 'react-icons/ri';
import './Skills.css';

const Skills = () => {
  return (
    <section className="education container">
      <h1 className="heading">
        my <span>Skills</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <RiCodeBoxFill className="skills-icon" />
          <span>Development</span>
          <h3>Front End Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </div>

        <div className="box">
          <FaTools className="skills-icon" />
          <span>Tools</span>
          <h3>Tools</h3>
          <ul>
            <li>SASS</li>
            <li>MongoDB</li>
            <li>EXPRESS</li>
            <li>Firebase</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
          </ul>
        </div>

        <div className="box">
          <HiUserGroup className="skills-icon" />
          <span>Soft Skills</span>
          <h3>Front End Development</h3>
          <ul>
            <li>Curiosity</li>
            <li>Time management</li>
            <li>Problem solving</li>
            <li>Critical thinking</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
