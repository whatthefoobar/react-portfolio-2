import { FaTools } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiCodeBoxFill } from "react-icons/ri";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="education ">
      <h1 className="heading">
        my <span>Skills</span>
      </h1>

      <div className="box__container">
        <div className="box">
          <RiCodeBoxFill className="skills__icon" />
          <span>Development</span>
          <h3>Front End Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Firebase</li>
            <li>SASS</li>
            <li>MongoDB</li>
            <li>EXPRESS.js</li>
          </ul>
        </div>

        <div className="box">
          <FaTools className="skills__icon" />
          <span>Tools</span>
          <h3>Tools</h3>
          <ul>
            <li>VSCode</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Git & Github</li>
            <li>Netlify</li>
            <li>Heroku</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
          </ul>
        </div>

        <div className="box">
          <HiUserGroup className="skills__icon" />
          <span>Soft Skills</span>
          <h3>Front End Development</h3>
          <ul>
            <li>Curiosity</li>
            <li>Time management</li>
            <li>Problem solving</li>
            <li>Critical thinking</li>
            <li>Communication</li>
            <li>Conflict resolution</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
