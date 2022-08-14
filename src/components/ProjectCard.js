import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="box" key={index}>
      <img src={project} alt="project" />
    </div>
  );
};

export default ProjectCard;
