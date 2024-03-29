import "./About.css";
import pic from "../../assets/img/pic.jpg";

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
{/*             “I will not say I failed 1000 times, I will say that I discovered
            there are 1000 ways that can cause failure.” is my favorite quote as
            I do believe that learning through failure is the best teacher. To
            better learn I believe I need to let go of fears that don't serve me
            and fear of rejection is one of them. So by all means reject me but
            tell me why so I can learn and improve. */}
            I am an ambitious, gritty developer with a passion for making my own things and learning from my own mistakes as I go, coding being no different.
            When I'm not coding I love to cook different cuisines for the people I care about and for now making my own weird plushie dolls. 
            Check out my skills and project and if there is anything you like dontact me, I also love coffee.
          </p>
          <button className="btn">
            <a href="https://github.com/whatthefoobar">My github</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
