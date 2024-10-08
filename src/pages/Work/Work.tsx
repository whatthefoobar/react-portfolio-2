import "./Work.css";
import p1 from "../../assets/img/p1.png";
import p3 from "../../assets/img/p3.png";
import p5 from "../../assets/img/p5.png";
import p6 from "../../assets/img/p6.jpg";
import p7 from "../../assets/img/p7.png";
import p9 from "../../assets/img/p9.jpg";
import p10 from "../../assets/img/p10.png";
import p11 from "../../assets/img/p11.png";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { IProject } from "../../types/types";

const projects: IProject[] = [
  {
    name: "Fullstack News site",
    image: [p11],
    description:
      "A minimal UI news app built in React and using New York Times API for data. Project built with Typescript React and Redux-toolkit for the frontend, and Node for the backend (used to better hide api keys)",
    code: "https://github.com/whatthefoobar/news-app-redone",
    preview: "https://news-app-redone-client.vercel.app/",
  },
  {
    name: "Eco sustainability blog",
    image: [p3],
    description:
      "A MERN blog project. Fullstack blog app using MongoDB, Express, React, and Node. ",
    code: "https://github.com/whatthefoobar/react-blog",
    preview: "https://react-blog-1s9g.onrender.com/",
  },
  {
    name: "MERN print shop",
    image: [p1],
    description:
      "A print shop app with a cart authentication and checkout option. state management done with Redux toolkit. Tech stach: React, Express, Node,MongoDB. ",
    code: "https://github.com/whatthefoobar/galleria_shop",
    preview: "https://galleria-cyy5.onrender.com",
  },


  {
    name: "Movie app",
    image: [p5],
    description:
      "A fullstack React.js with Typescript and redux-toolkit movie app. The backend is written in Node with Typescript  You can get the latest popular movies search by keyboard and view movie descriptions.",
    code: "https://github.com/whatthefoobar/react-movie-app",
    preview: "https://react-movie-app-op9b.onrender.com",
  },


  {
    name: "RPG Caves game",
    image: [p6],
    description:
      "A top-down RPG style game built with Phaser, the concept inspired by Squid Games requires the player to select between caves, some of which are safe, others lead to player death.",
    code: "https://github.com/whatthefoobar/PhaserGame-RPG-Caves",
    preview: "https://harry-yates.github.io/PhaserGame-RPG-Caves/",
  },
  {
    name: "Portfolio page",
    image: [p7],
    description:
      "A vanilla JS portfolio page using tabs to navigate from section to section",
    code: "https://github.com/whatthefoobar/portfolio-landing-page",
    preview: "https://hi-portfolio-page.netlify.app/",
  },

  {
    name: "Zodiac killer buddy",
    image: [p9],
    description:
      "A form that takes in your birthday and returns a serial killer with the same zodiac sign as you. I used a Node webscraper to get a killer for each zodiac sign. Static files are served by a Node server that also scrapes a database site for data.",
    code: "https://github.com/whatthefoobar/zodiac-project",
    preview: "https://zodiac-killer.onrender.com/",
  },
  {
    name: "React flashcard app",
    image: [p10],
    description:
      "A flashcard app using React with Typescript for learning some Mandarin phrases.",
    code: "https://github.com/whatthefoobar/react-flashcards",
    preview: "https://react-flashcards-app.netlify.app/",
  },
];

const Work = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="heading">
        my <span>portfolio</span>
      </h1>

      <div className="box__container">
        {projects.map((project: IProject, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
