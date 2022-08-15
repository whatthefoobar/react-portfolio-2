import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  console.log(project);
  return (
    <div className="box card" key={index}>
      <div className="card-image">
        <img src={project} alt="portfolio card" />
      </div>
      <div className="card-content">
        <div className="card-title">Card Hover Animation</div>
        <div className="card-subtitle">HTML and CSS (Animation)</div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, molestiae. Sint, laborum vel. Doloremque nesciunt a ad
            nulla officia deleniti rerum id aut harum possimus tempore,
            voluptatibus illum, repellat consectetur?
          </p>
          <div className="buttons">
            <button>Code</button>
            <button>Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
