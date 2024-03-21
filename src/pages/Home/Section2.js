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
    paragraph: `There’s a reason why Chicken Kottu Roti is insanely popular in Sri Lanka! Chopped flatbread mixed and mashed together with chicken and vegetables and lots of aromatic spices, this chicken kottu roti recipe is as delicious as it is comforting,`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `You cant ever visit Sri Lanka and leave without eating Kottu roti (also spelled Koththu or Kotthu). Itll be hard to avoid it anyway. If you take a stroll down a busy street in the heart of Colombo`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `The whole mix is then chopped and mixed together on a large flat griddle with two large steel chopping blades, which produces that characteristic sound and the theatrics of making kottu roti.`,
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
              <h2>The Kotttu tastes better when you eat it with your family</h2>
              <p>
                The crispy fried vegetables and the tasty meat gives a wonderful
                taste to delicious kottu roti. The crispy fried vegetables and
                the tasty meat gives a wonderful taste to delicious kottu roti.
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
