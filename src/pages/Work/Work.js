import React from 'react';
import p1 from '../../img/1.jpeg';

const Work = () => {
  return (
    <section id="portfolio" class="portfolio container">
      <h1 class="heading">
        my <span>portfolio</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src={p1} alt="project" />
        </div>

        <div class="box">
          <img src={p1} alt="project" />
        </div>

        <div class="box">
          <img src={p1} alt="project" />
        </div>

        <div class="box">
          <img src={p1} alt="project" />
        </div>

        <div class="box">
          <img src={p1} alt="project" />
        </div>

        <div class="box">
          <img src={p1} alt="project" />
        </div>
      </div>
    </section>
  );
};

export default Work;
