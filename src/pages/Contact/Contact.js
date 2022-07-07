import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact container">
      <h1 className="heading">
        <span>Contact</span> me
      </h1>

      <div className="row">
        <div className="content">
          <h3 className="title">Contact info</h3>

          <div className="info">
            <h3 className="email">
              <i className="fas fa-envelope"></i> irina.mntn@gmail.com
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +123-456-7890
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +111-222-3333
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i> Stockholm, Sweden.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
