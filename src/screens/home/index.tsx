import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { IMG } from "../../assets/images";
import Files from "./../../assets/files";
import "./styles.css";

function Home() {
  return (
    <div className="global-container">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={8} className="col_bt">
            <div className="wrap-info">
              <h2 className="introLabel">Hi there 👋 I`m Hidayat</h2>
              <p className="introSubLabel">
                🔭 I’m currently working on{" "}
                <a
                  href="https://www.moduit.id/"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  moduit.id
                </a>{" "}
                as a react native developer. Working with lots of adding new
                features and bugfix issues to make the app even better.
                <br />
                🌱 Outside of work, I learned a lot of correct coding
                fundamentals such as clean code, code optimization, and other
                basic things that I think are important in building applications
                in a cool and correct way.
                <br />
                <br />
                Warm regards from me 😄
              </p>
              <Button className="btnCV" href={Files.cv} target="_blank">
                Download Resume
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="col_bt right_col_desktop">
            <div className="wrapAvatar">
              <Image src={IMG.SALY} className="avatar" roundedCircle />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
