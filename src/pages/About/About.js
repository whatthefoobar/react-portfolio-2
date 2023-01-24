import React from "react";
import "./About.css";
import pic from "../../img/pic.jpg";

const About = () => {
  return (
    <section id="about" className="container">
      <h1 className="heading">
        <span>About</span> me
      </h1>

      <div className="about">
        <div className="image">
          <img src={pic} alt="me" />
        </div>
        <div className="content">
          {/* <h3 className="title">I am a developer</h3> */}
          <p>
            “A jack of all trades is a master of none, but oftentimes better
            than a master of one.” I like this saying because it best describes
            my approach to learning. Often a cliché, I do consider myself a
            life-time learner, after studying economics and psychology and
            working in customer oriented jobs I decided to finally bite the
            bullet and take on potentially the biggest challenge I had so far :
            get into frontend development. Coding challenges me to find
            solutions to unique problems all the while keeping me humble and
            focused on a goal that does not have a clear timeline.
          </p>
          <button className="btn">
             <a href="https://github.com/whatthefoobar">Learn more</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
