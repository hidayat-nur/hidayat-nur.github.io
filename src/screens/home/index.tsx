import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { IMG } from "../../assets/images";
import styles from "./index.styles";
import Files from "./../../assets/files";

function Home() {
  return (
    <div style={styles.container}>
      <Container>
        <Row>
          <Col xs={8} style={styles.col_bt}>
            <div style={styles.wrapIntroInfo}>
              <h2 style={styles.introLabel}>Hi there 👋 I`m Hidayat</h2>
              <p style={styles.introSubLabel}>
                🔭 I’m currently working on{" "}
                <a href="https://www.moduit.id/" style={styles.link}>
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
              <Button style={styles.btnCV} href={Files.cv} target="_blank">
                Download Resume
              </Button>
            </div>
          </Col>
          <Col xs={4} style={styles.col_bt}>
            <div style={styles.wrapAvatar}>
              <Image src={IMG.SALY} style={styles.avatar} roundedCircle />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
