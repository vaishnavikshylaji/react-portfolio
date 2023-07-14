import { Card } from "react-bootstrap";

function Experience() {
  return (
    <>
      <Card>
        <Card.Body>
          <h5>
            <i className="fa fa-briefcase me-3" aria-hidden="true"></i>ReactJs |
            Laravel | PHP | Django | Devops Developer
          </h5>
          <h6>Direct Axis Technology L.L.C, Dubai, UAE (05-12-2022)</h6>
          <Card.Text>
            <ul className="me-2">
              <li>ReactJs</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Django</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
            </ul>
          </Card.Text>
          <Card.Link target={"_blank"} href="https://www.directaxistech.com/">
            https://www.directaxistech.com/
          </Card.Link>
          <h5 className={"mt-5"}>
            <i className="fa fa-briefcase me-3" aria-hidden="true"></i>ReactJS |
            Laravel | Devops Developer
          </h5>
          <h6>
            Pixbit Solutions Pvt. Ltd, Calicut, India (05-10-2020 - 18-11-2022)
          </h6>
          <Card.Text>
            <ul>
              <li>ReactJs</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
            </ul>
          </Card.Text>
          <Card.Link target={"_blank"} href="https://pixbitsolutions.com">
            https://pixbitsolutions.com
          </Card.Link>
          <h5 className={"mt-5"}>
            <i className="fa fa-briefcase me-3" aria-hidden="true"></i>Laravel
            Developer
          </h5>
          <h6>
            TutorHow Scientific Edutech Pvt. Ltd, Kerala, India (10-10-2019 -
            11-04-2020)
          </h6>
          <Card.Text>
            <li>PHP</li>
            <li>Laravel</li>
          </Card.Text>
          <Card.Link target={"_blank"} href="https://tutorhow.com/">
            https://tutorhow.com/
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Experience;
