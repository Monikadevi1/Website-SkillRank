import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <section id="contact" className="contact-container py-5">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        Connect with us effortlessly at SmartED – your gateway to excellence. Our dedicated team is here to support your journey, ensuring every inquiry leads to a seamless experience.
      </p>
      <div className="contact-info">
        <ul className="contact-list">
          <li className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>2nd floor, Umiya emporium, Hosur main road, Opp to Nexus mall, Koramangala, Bengaluru 560029.</span>
          </li>
          <li className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+917892227891</span>
          </li>
          <li className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>example@domain.com, example@domain.com</span>
          </li>
        </ul>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-control mb-3" />
        <input type="email" placeholder="Your Email" className="form-control mb-3" />
        <textarea placeholder="Your Message" className="form-control mb-3"></textarea>
        <button type="submit" className="btn btn-danger">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
