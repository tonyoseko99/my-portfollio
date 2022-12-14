import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h3 className="contact__title">CONTACT ME</h3>
      <div className="contact__container">
        <p className="contact__text">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="contact__info">
          {/* email */}
          <a href="mailto:tonnyseko@gmail.com">
            <i class="far fa-envelope"></i>
          </a>
          {/* end of email */}
          {/* github */}
          <a href="https://github.com/tonyoseko99">
            <i class="fab fa-github"></i>
          </a>
          {/* end of github */}
          {/* linkedin */}
          <a href="https://www.linkedin.com/in/tonny-oseko-8074a2152/">
            <i class="fab fa-linkedin"></i>
          </a>
          {/* end of linkedin */}
          {/* twitter */}
          <a href="https://twitter.com/TonyOseko">
            <i class="fab fa-twitter"></i>
          </a>
          {/* end of twitter */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
