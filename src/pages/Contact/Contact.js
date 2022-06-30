import React from 'react';

const Contact = () => {
  return (
    <section id="contact" class="contact container">
      <h1 class="heading">
        <span>Contact</span> me
      </h1>

      <div class="row">
        <div class="content">
          <h3 class="title">Contact info</h3>

          <div class="info">
            <h3 class="email">
              <i class="fas fa-envelope"></i> irina.mntn@gmail.com
            </h3>
            <h3>
              <i class="fas fa-phone"></i> +123-456-7890
            </h3>
            <h3>
              <i class="fas fa-phone"></i> +111-222-3333
            </h3>
            <h3>
              <i class="fas fa-map-marker-alt"></i> Stockholm, Sweden.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
