import React from "react";
import { Container, Row } from "react-bootstrap";
import LoadDoctors from "../../utilities/loadDoctors/loadDoctors";
import Doctor from "../Doctor/Doctor";
/* this tis the component to show all the doctor. */
const Doctors = () => {
  const [doctors] = LoadDoctors();
  return (
    <Container className="mt-4">
      <h2 className="text-center text-success my-5">Our Expert Doctors</h2>
      <Row className="g-4 mb-5">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
