import React from "react";
import Header from "../partials/Header";
// import Footer from "../partials/Footer";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import profileImage from "../assets/images/IMG_4637.jpg";

function Home() {
  const [page, setPage] = useState("experience");
  function renderSwitch(value) {
    switch (value) {
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      default:
        return <Experience />;
    }
  }

  const clickExperience = () => {
    setPage("experience");
  };

  const clickEducation = () => {
    setPage("education");
  };

  return (
    <>
      <Header />
      <div className={"bg-black p-4 text-white"}>
        <Container className={"mt-1"}>
          <Row className="d-flex align-items-center">
            <Col sm={12} md={9}>
              <h2>Vaishnavi K Shylaji</h2>
              <h5>PHP | Laravel | React |AWS Developer</h5>
              <p className={"mt-2"}>
                Fullstack developer skilled in PHP, Laravel and React.js with
                more than three years of experience. Passionate about working
                with new technologies, solving interesting technical challenges.
              </p>
            </Col>
            <Col sm={12} md={2}>
              <img
                alt="profile"
                src={profileImage}
                width={150}
                height={150}
                rounded
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={"p-md-4"}>
        <Container>
          <div className={"row"}>
            <div className={"col-md-3"}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i
                      className="fa fa-briefcase text-white"
                      aria-hidden="true"
                    ></i>
                    <button
                      className={"btn text-light"}
                      onClick={clickExperience}
                    >
                      Experience
                    </button>
                  </ListGroup.Item>
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i
                      className="fa fa-graduation-cap text-white"
                      aria-hidden="true"
                    ></i>
                    <button
                      className={"btn text-white"}
                      onClick={clickEducation}
                    >
                      Education
                    </button>
                  </ListGroup.Item>
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i
                      className="fa fa-desktop text-white"
                      aria-hidden="true"
                    ></i>
                    <button className={"btn text-white"}>Projects</button>
                  </ListGroup.Item>
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i className="fa fa-cogs text-white" aria-hidden="true"></i>
                    <button className={"btn text-white"}>Skills</button>
                  </ListGroup.Item>
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i
                      className="fa fa-thumbs-up text-white"
                      aria-hidden="true"
                    ></i>
                    <button className={"btn text-white"}>Interest</button>
                  </ListGroup.Item>
                  <ListGroup.Item className={"p-4 bg-black border-light"}>
                    <i
                      className="fa fa-language text-white"
                      aria-hidden="true"
                    ></i>
                    <button className={"btn text-white"}>Languages</button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className={"col-md-9"}>{renderSwitch(page)}</div>
          </div>
        </Container>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
