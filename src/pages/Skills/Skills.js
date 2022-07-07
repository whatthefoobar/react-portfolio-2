import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="education" className="education container">
      <h1 className="heading">
        my <span>education</span>
      </h1>

      <div className="box-container">
        <div className="box">
          {/* <i className="fas fa-graduation-cap"></i> */}
          <FaGraduationCap className="skills-icon" />
          <span>2016</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div className="box">
          <FaGraduationCap className="skills-icon" />
          <span>2017</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div className="box">
          <FaGraduationCap className="skills-icon" />
          <span>2018</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div className="box">
          <FaGraduationCap className="skills-icon" />
          <span>2019</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div className="box">
          <FaGraduationCap className="skills-icon" />
          <span>2020</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div className="box">
          <FaGraduationCap className="skills-icon" />
          <span>2021</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
