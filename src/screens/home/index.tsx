import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IMG } from "../../assets/images";
import "./index.css";

function Home() {
  return (
    <Container>
      <Row className="intro">
        <Col xs={8} className="wrap-intro-info">
          <h2>
            Hi, I am Hidayat, <br /> React Native Engineer.
          </h2>
          <p>
            I have experience in react native developer for 3 years, previously
            I was also a web developer with the technology used html, css,
            jquery & codeigniter. Hope to work with you in the future
          </p>
        </Col>
        <Col className="wrap-avatar">
          <Image src={IMG.AVATAR} className="avatar" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
