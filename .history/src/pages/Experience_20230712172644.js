import { Card } from "react-bootstrap";

function Experience() {
  return (
    <>
      <Card>
        <Card.Body>
          <h5>
            <i className="fa fa-briefcase me-1" aria-hidden="true"></i>ReactJs |
            Laravel | PHP | Django | Devops Developer
          </h5>

          <Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              <span className="ms-4">
                Direct Axis Technology L.L.C, Dubai, UAE (05-12-2022)
              </span>
            </Card.Subtitle>

            {/* <ul className="ms-2">
              <li>ReactJs</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Django</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
            </ul> */}
          </Card.Text>
          <Card.Link
            className="ms-4"
            target={"_blank"}
            href="https://www.directaxistech.com/"
          >
            https://www.directaxistech.com/
          </Card.Link>
          <h5 className={"mt-5"}>
            <i className="fa fa-briefcase me-1" aria-hidden="true"></i>ReactJS |
            Laravel | Devops Developer
          </h5>

          <Card.Text>
            <span className="ms-4">
              Pixbit Solutions Pvt. Ltd, Calicut, India (05-10-2020 -
              18-11-2022)
            </span>
            {/* <ul className="ms-2">
              <li>ReactJs</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
            </ul> */}
          </Card.Text>
          <Card.Link
            span
            className="ms-4"
            target={"_blank"}
            href="https://pixbitsolutions.com"
          >
            https://pixbitsolutions.com
          </Card.Link>
          <h5 className={"mt-5"}>
            <i className="fa fa-briefcase me-1" aria-hidden="true"></i>Laravel
            Developer
          </h5>

          <Card.Text>
            <span className="ms-4">
              TutorHow Scientific Edutech Pvt. Ltd, Kerala, India (10-10-2019 -
              11-04-2020)
            </span>
            {/* <ul className="ms-2">
              <li>PHP</li>
              <li>Laravel</li>
            </ul> */}
          </Card.Text>
          <Card.Link
            span
            className="ms-4"
            target={"_blank"}
            href="https://tutorhow.com/"
          >
            https://tutorhow.com/
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Experience;
