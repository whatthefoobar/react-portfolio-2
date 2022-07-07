import React from 'react';
import './About.css';
import pic from '../../img/pic.jpg';

const About = () => {
  return (
    <section id="about" className="container">
      <h1 className="heading">
        <span>About</span> me
      </h1>

      <div className="about">
        <div className="image">
          <img src={pic} alt="me" />
        </div>
        <div className="content">
          {/* <h3 className="title">I am a developer</h3> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            non. Ea magni soluta fugiat cum amet quibusdam facilis itaque
            dolorem dolorum architecto reiciendis ut minima, atque dolore, optio
            inventore enim totam quam quasi ab ex. Distinctio illum vitae quo,
            culpa praesentium, corrupti ipsam obcaecati reiciendis, ipsum beatae
            officiis animi! Voluptas ratione eaque cum autem, sed blanditiis
            earum nam impedit deleniti iure neque minus rerum natus maxime.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default About;
