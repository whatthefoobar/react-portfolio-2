import React from 'react';
import './Work.css';
import p1 from '../../img/p6.png';
import p2 from '../../img/p3.jpg';
import p3 from '../../img/p5.png';
import p4 from '../../img/p7.png';
import p5 from '../../img/p9.png';
import p6 from '../../img/p10.png';
import p7 from '../../img/p4.jpg';
import p8 from '../../img/p2.jpg';
import ProjectCard from '../../components/ProjectCard';

const Work = () => {
  const projects = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <section id="portfolio" className="portfolio container">
      <h1 className="heading">
        my <span>portfolio</span>
      </h1>

      <div className="box-container">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
