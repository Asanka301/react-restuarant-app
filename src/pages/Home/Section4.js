import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/logo1.png";

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
              <h2>Nothing brings people together like a good Kottu</h2>
              <p>
                The crispy fried vegetables and the tasty meat gives a wonderful
                taste to delicious kottu roti. The crispy fried vegetables and
                the tasty meat gives a wonderful taste to delicious kottu roti.
              </p>
              <ul>
                <li>
                  <p>
                    The crispy fried vegetables and the tasty meat gives a
                    wonderful taste to delicious kottu roti.
                  </p>
                </li>
                <li>
                  <p>
                    The crispy fried vegetables and the tasty meat gives a
                    wonderful taste to delicious kottu roti.
                  </p>
                </li>
                <li>
                  <p>
                    The crispy fried vegetables and the tasty meat gives a
                    wonderful taste to delicious kottu roti.
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
