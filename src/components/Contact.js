import React from "react";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="containerr">
          <div className="contact__container">
            <h2 className="contact__title">CONTACT ME</h2>
            <p className="contact__text">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <div className="contact__info">
              {/* email */}
              <a href="">
                <i class="far fa-envelope"></i>
              </a>
              {/* end of email */}
              {/* github */}
              <a href="">
                <i class="fab fa-github"></i>
              </a>
              {/* end of github */}
              {/* linkedin */}
              <a href="">
                <i class="fab fa-linkedin"></i>
              </a>
              {/* end of linkedin */}
              {/* twitter */}
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
              {/* end of twitter */}
            </div>
          </div>
          {/* contact form */}
          <form className="contact__form">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="contact__form--name"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact__form--email"
              />
            </div>
            <textarea
              placeholder="Message"
              className="contact__form--message"
            ></textarea>
            <button type="submit" className="btn btn-dark btn-lg">
              Send Message <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
