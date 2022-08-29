import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { IMG } from "../../assets/images";
import styles from "./index.styles";
import Files from "./../../assets/files";

function Home() {
  return (
    <div>
      <div style={styles.wrapIntro}>
        <Container>
          <Row style={styles.intro}>
            <Col xs={8} style={styles.wrapIntroInfo}>
              <h2 style={styles.introLabel}>
                Hi, I am Hidayat, <br /> React Native Engineer.
              </h2>
              <p style={styles.introSubLabel}>
                I am a software engineer who focuses on mobile development. The
                main technology i use is `react native`.
                <br />
                My personal slogan is
                <br />
                <br />
                Build properly | Understand the concept | Understand what to do
              </p>
              <Button variant="success" href={Files.cv} target="_blank">
                Download Resume
              </Button>
            </Col>
            <Col style={styles.wrapAvatar}>
              <Image src={IMG.AVATAR} style={styles.avatar} roundedCircle />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
