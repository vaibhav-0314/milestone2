import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              At TASTY BURGER, we believe in serving more than just great food – we create unforgettable experiences. Whether you're enjoying a classic cheeseburger or exploring new flavors, every bite brings you closer to burger perfection. Join us for a meal that’s as delicious as it is memorable!
              </p>
              <ul>
                <li>
                  <p>
                  From juicy patties to perfectly toasted buns, every burger is crafted with care. We use only the finest ingredients to ensure that each bite is packed with flavor, making your burger experience second to none.
                  </p>
                </li>
                
                <li>
                  <p>
                  Whether you're a meat lover, vegetarian, or vegan, we have something for everyone. Customize your burger to your taste and enjoy a meal that’s as unique as you are. Because at TASTY BURGER, it’s all about satisfying your cravings!
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
