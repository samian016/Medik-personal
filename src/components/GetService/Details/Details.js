import React from "react";
import {  Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
/* this component show the details of the service when user click order button in service */
const Details = (props) => {
  const { name, balance, picture, healpingHand, about } = props.service;
  console.log(props);
  return (
    <Card style={{ width: "500px" }} className="mx-auto">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>Pathologist: {healpingHand}</Card.Title>
        <h3>Service: {name}</h3>
        <h4>Cost: {balance}</h4>
        <Card.Text>Description: {about}</Card.Text>
        <Link to="/home">
          <Button variant="primary">Back</Button>
        </Link>
        <button className="ms-5 btn-success btn">Confirm</button>
      </Card.Body>
    </Card>
  );
};

export default Details;
