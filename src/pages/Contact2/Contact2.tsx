import React from "react";
import "./Contact2.css";

import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact2: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="heading">
        <span>Contact</span> me
      </h1>
      <div className="container">
        <div className="contact__wrapper">
          <div className="right">
            <ContactForm />
          </div>
          <div className="left">
            <div className="contact__box">
              <a href="https://github.com/whatthefoobar">
                <FaGithub className="contact__social" />
                <h3>Github</h3>
              </a>
            </div>

            <div className="contact__box">
              <a href="mailto:irina.mntn@gmail.com">
                <FaMailBulk className="contact__social" />
                <h3>Email</h3>
              </a>
            </div>

            <div className="contact__box">
              <a href="https://www.linkedin.com/in/irina-munteanu-b%C3%A4ck-523a41b4/">
                <BsLinkedin className="contact-social" />
                <h3>LinkedIn</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
