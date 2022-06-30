import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="education" class="education container">
      <h1 class="heading">
        my <span>education</span>
      </h1>

      <div class="box-container">
        <div class="box">
          {/* <i class="fas fa-graduation-cap"></i> */}
          <FaGraduationCap className="skills-icon" />
          <span>2016</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <FaGraduationCap className="skills-icon" />
          <span>2017</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <FaGraduationCap className="skills-icon" />
          <span>2018</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <FaGraduationCap className="skills-icon" />
          <span>2019</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
          <FaGraduationCap className="skills-icon" />
          <span>2020</span>
          <h3>Front End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quos alias praesentium. Id autem provident laborum quae, distinctio
            eaque temporibus!
          </p>
        </div>

        <div class="box">
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
