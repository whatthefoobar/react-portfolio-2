import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact container">
      <h1 className="heading">
        <span>Contact</span> me
      </h1>

      <div className="row">
        <div className="content">
          <p className="contact-text">
            If I'm not tinkering at something I do make sure to check my email
            and socials so If you like what you see, don't be a stranger. Drop
            me a line and let's collaborate.
          </p>

          <div className="info">
            <div className="box">
              <a href="https://github.com/whatthefoobar">
                <FaGithub className="contact-social" />
                <h3>Github</h3>
              </a>
            </div>

            <div className="box">
              <a href="mailto:irina.mntn@gmail.com">
                <FaMailBulk className="contact-social" />
                <h3>Email</h3>
              </a>
            </div>

            <div className="box">
              <a href="https://www.linkedin.com/in/irina-munteanu-b%C3%A4ck-523a41b4/">
                <BsLinkedin className="contact-social" />
                <h3>LinkedIn</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
