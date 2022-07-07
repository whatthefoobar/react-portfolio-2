import React from 'react';
import './Work.css';
import p1 from '../../img/p6.png';
import p2 from '../../img/p3.jpg';
import p3 from '../../img/p5.png';
import p4 from '../../img/p7.png';
import p5 from '../../img/p9.png';
import p6 from '../../img/p10.png';
import p7 from '../../img/p4.jpg';
import p8 from '../../img/p7.png';
import p9 from '../../img/p2.jpg';

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
          <img src={p2} alt="project" />
        </div>

        <div className="box">
          <img src={p3} alt="project" />
        </div>

        <div className="box">
          <img src={p4} alt="project" />
        </div>

        <div className="box">
          <img src={p5} alt="project" />
        </div>

        <div className="box">
          <img src={p6} alt="project" />
        </div>

        <div className="box">
          <img src={p7} alt="project" />
        </div>

        <div className="box">
          <img src={p8} alt="project" />
        </div>

        <div className="box">
          <img src={p9} alt="project" />
        </div>
      </div>
    </section>
  );
};

export default Work;
