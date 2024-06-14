import React from "react";
import "./Contact2.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Contact2: React.FC = () => {
  return (
    <div className="contactSection">
      <div className="container">
        <div className="sectionTitle">
          <h2>Contact</h2>
          <p>Get in touch</p>
        </div>
        <div className="contactSection__wrapper">
          <div className="right">
            <ContactForm />
          </div>
          <div className="left">
            <div className="contact__box">
              <a href="https://github.com/whatthefoobar">
                <FaGithub className="contact-social" />
                <h3>Github</h3>
              </a>
            </div>

            <div className="contact__box">
              <a href="mailto:irina.mntn@gmail.com">
                <FaMailBulk className="contact-social" />
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