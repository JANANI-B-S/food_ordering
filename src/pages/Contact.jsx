import React from "react";
<<<<<<< HEAD
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import "../styles/contact.css"; // Add this for styling

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    alert("Your message has been sent!"); // Show alert
  };

  return (
    <Helmet title="Contact">
      <section className="contact-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="12" className="contact-info">
              <h2 className="contact-title">Get in Touch</h2>
              <div className="contact-item">
                <i className="ri-mail-line contact-icon"></i>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p>janani2394@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="ri-map-pin-line contact-icon"></i>
                <div className="contact-details">
                  <h5>Address</h5>
                  <p>123 Main Street, Coimbatore</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="ri-phone-line contact-icon"></i>
                <div className="contact-details">
                  <h5>Phone</h5>
                  <p>123-456-7893</p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit" className="contact-submit-btn">Send Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
=======

const Contact = () => {
  return <div>Contact</div>;
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
};

export default Contact;
