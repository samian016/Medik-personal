import React from "react";
import {  Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
/* this component is used to show a single service in services component in home  */
const Servise = ({ service }) => {
  const { name, about, picture, balance, guid } = service;
  return (
    <Col sm={12} md={12} lg={4}>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about.slice(0, 100)}</Card.Text>
          <p>Cost: {balance}</p>
        </Card.Body>
        <Card.Footer>
          <Link to={`/service/${guid}`}>
          <Button variant="dark">Order</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Servise;
