import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { name, image, description, code, preview } = project;

  return (
    <div className="box card">
      <div className="card-image">
        <img src={image} alt="portfolio card" />
      </div>
      <div className="card-content">
        <div className="card-title">{name}</div>

        <div className="bottom">
          <p>{description}</p>
          <div className="buttons">
            <a href={code}>
              <button>Code</button>
            </a>

            <a href={preview}>
              <button>Preview</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
