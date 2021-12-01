import React from 'react';
import { Card, Col } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
/* this is the component to show a single doctor in doctor containar named doctors. */
const Doctor = ({doctor}) => {
    const {name, picture, age, gender, email, address}= doctor;
    return (
        <Col sm={12} md={12} lg={4}>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Email: {email}</Card.Text>
          <Card.Text> Address: {address.slice(0, 100)}</Card.Text>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </Card.Body>
        <Card.Footer>
          <Button variant="dark">Details</Button>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default Doctor;