import React from 'react';
import p1 from '../../img/1.jpeg';

const Work = () => {
  return (
    <section id="portfolio" className="portfolio container">
      <h1 className="heading">
        my <span>portfolio</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={p1} alt="project" />
        </div>

        <div className="box">
          <img src={p1} alt="project" />
        </div>

        <div className="box">
          <img src={p1} alt="project" />
        </div>

        <div className="box">
          <img src={p1} alt="project" />
        </div>

        <div className="box">
          <img src={p1} alt="project" />
        </div>

        <div className="box">
          <img src={p1} alt="project" />
        </div>
      </div>
    </section>
  );
};

export default Work;
