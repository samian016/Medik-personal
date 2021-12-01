import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/logo_300x300.png";
/* this banner component is is the top component of gui, this will show the brand photo and some other info like number ,mail etc */
const Banner = () => {
  return (
    <div className="d-md-flex container-md me-lg-5 align-items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <Container className="ms-lg-5">
        <Row className="justify-content-start">
          <Col sm={12} md={12} lg={4}>
            <h5>
              <i className="fas fa-phone-alt text-success">
                {" "}
                <span className="text-dark"> (+880)01647849152</span>
              </i>
            </h5>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <h5>
              <i className="fas fa-envelope text-success"></i>{" "}
              <span>medik@info.com</span>
            </h5>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <h5>
              <i className="fas fa-search-location text-success"></i>{" "}
              <span>State location</span>
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
