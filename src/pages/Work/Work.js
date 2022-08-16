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
import p9 from '../../img/p11.png';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Work = () => {
  const projects = [
    {
      name: 'MERN shopping app',
      image: [p1],
      description:
        'A straight forward e-commerce webstite with a cart authentication and checkout option. state management done with useContext and useReducer',
      code: 'https://github.com/whatthefoobar/ecomm-app-project',
      preview: 'https://shop-mern-project.herokuapp.com/',
    },
    {
      name: 'React news app',
      image: [p2],
      description:
        'React news app project using New York Times Api. My first real chance to apply my React skills and navigate using a public API in the context of React.',
      code: 'https://github.com/whatthefoobar/hi-react-news-app',
      preview: 'https://news-app-react-hi-project.netlify.app',
    },
    {
      name: 'Movie app',
      image: [p3],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum repellat aliquam voluptates cum beatae ratione officiis, deserunt unde culpa.',
      code: 'https://github.com/whatthefoobar/react-movie-app',
      preview: 'https://react-movie-app-tmd.netlify.app/',
    },
    {
      name: '50 projects gallery',
      image: [p4],
      description:
        'A personal challenge to code a small project everyday for 50 days. Requirements can useCSS HTML and JavaScript, animations and optionally libraries.',
      code: 'https://github.com/whatthefoobar/50daysofcode-project-gallery',
      preview: 'https://50dayofcode-project-gallery.netlify.app/',
    },
    {
      name: 'LinkedIn clone',
      image: [p5],
      description:
        ' A simplified Linkedin clone using React, Redux, MUI icons and Firebase for authentication and database.',
      code: 'https://github.com/whatthefoobar/react-linkedin-clone',
      preview: 'https://linkedin-clone-8fbcd.web.app/',
    },
    {
      name: 'Gmail Clone',
      image: [p6],
      description:
        ' A simplified Google clone using React, Redux, MUI icons and Firebase for authentication and database.',
      code: 'https://github.com/whatthefoobar/react-gmail-clone',
      preview: 'https://clone-174af.web.app',
    },
    {
      name: 'RPG Caves game',
      image: [p7],
      description:
        'A top-down RPG style game built with Phaser, the concept inspired by Squid Games requires the player to select between caves, some of which are safe, others lead to player death.',
      code: 'https://github.com/whatthefoobar/PhaserGame-RPG-Caves',
      preview: 'https://harry-yates.github.io/PhaserGame-RPG-Caves/',
    },
    {
      name: 'Portfolio page',
      image: [p9],
      description:
        'A simple vanilla JS portfolio page using tabs to navigate from section to section',
      code: 'https://github.com/whatthefoobar/portfolio-landing-page',
      preview: 'https://hi-portfolio-page.netlify.app/',
    },
    {
      name: 'Zodiac form app',
      image: [p8],
      description:
        'A form that takes in your birthday and returns a serial killer with the same zodiac sign as you. For this i used a simple Node webscraper to get a killer for each zodiac sign. Queries are stored with localStorage.',
      code: 'https://github.com/whatthefoobar/zodiac-project',
      preview: '#',
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
