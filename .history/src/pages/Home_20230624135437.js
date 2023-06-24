import Header from "../partials/Header";
// import Footer from "../partials/Footer";
import { Card, Container, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";

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
          <h2>Vaishnavi K Shylaji</h2>
          <h5>PHP | Laravel | React Developer</h5>
          <p className={"mt-2"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
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
