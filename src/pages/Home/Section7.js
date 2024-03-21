import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              We did see shredded roasted chicken pieces in the mix but not
              much. There was plenty of onion, bell pepper and carrot in strewn
              about, all adding to the texture. It was packed with okay levels
              of spices and with the
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 071-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
