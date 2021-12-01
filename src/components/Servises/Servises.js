import React from "react";
import {  Container, Row } from "react-bootstrap";
import LoadData from "../../utilities/loadData/loadData";
import Servise from "../Servise/Servise";
/* this component used to store all service, that means this is service container */
const Servises = () => {
  const [services] = LoadData();
  // console.log(services);
  return (
    <Container id="services" className="mt-4">
      <hr className="border-bottom border border-dark border-3" />
      <h2 className="text-center text-success my-5">Our Services</h2>
      <Row className="g-4 mb-5">
        {services.map((service) => (
          <Servise key={service._id} service={service}></Servise>
        ))}
      </Row>
    </Container>
  );
};

export default Servises;
