import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="12" className="hero-text">
              <h5 className="hero-subtitle">Easy Order & Fast Delivery</h5>
              <h1 className="hero-title">
                <span>Enjoy</span> Your Favorite Pizza
              </h1>
              <Link to="/pizzas" className="hero-btn">
                Explore Menu <i className="ri-arrow-right-s-line"></i>
              </Link>
            </Col>
            <Col lg="6" md="12">
              <div className="hero-image">
                <img src={guyImg} alt="Delivery Guy" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

