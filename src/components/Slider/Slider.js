import React from "react";
import { Carousel } from "react-bootstrap";
import family from "../../images/family.jpg";
import amulance from "../../images/ambulance.jpg";
import blood from "../../images/blood.jpg";
import general from "../../images/general.jpg";
import home from "../../images/home.jpg";
import lab from "../../images/labretory.jpg";
import mental from "../../images/mental.jpg";
import room from "../../images/room.jpg";
/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div>
      <Carousel className="bg-transparent mt-3">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={general}
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={family}
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={amulance}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={blood}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={home}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={lab}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={mental}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-75 mx-auto rounded border border-success"
            src={room}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
