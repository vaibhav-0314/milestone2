import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our burgers are crafted with the finest ingredients, from the juiciest patties to 
        freshly baked buns. Each burger is a perfect blend of savory flavors, topped with 
        premium cheeses, crisp vegetables, and a variety of sauces.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `Whether you prefer a classic cheeseburger or a gourmet creation, we ensure every 
        bite is a flavorful experience. Our commitment to quality ingredients and expert 
        preparation guarantees that every burger is made to perfection.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Enjoy our lightning-fast delivery, guaranteed to arrive within 30 minutes or less! 
        Order now and experience the best in speed and flavor.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              There’s something special about enjoying a burger with the ones you love. Whether it's a weekend treat or a casual dinner, our burgers are made to be shared. So gather your family, dig in, and create delicious memories together with every bite!
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
