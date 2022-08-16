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

import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Work = () => {
  const projects = [
    {
      name: 'Ecommerce app',
      image: [p1],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'News app',
      image: [p2],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'Movie app',
      image: [p3],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: '50 projects gallery',
      image: [p4],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'LinkedIn clone',
      image: [p5],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'Google Clone',
      image: [p6],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'Caves game',
      image: [p7],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'Zodiac form app',
      image: [p8],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
  ];

  return (
    <section id="portfolio" className="portfolio container">
      <h1 className="heading">
        my <span>portfolio</span>
      </h1>

      <div className="box-container">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
