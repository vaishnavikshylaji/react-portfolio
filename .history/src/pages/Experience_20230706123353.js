import { Card, ListGroup } from "react-bootstrap";

function Experience() {
  return (
    <>
      <Card>
        <Card.Body>
          <h5>Fullstack Developer</h5>
          <h6>Direct Axis Technology L.L.C, Dubai, UAE (05-12-2022)</h6>
          <Card.Text>
            <ul>
              <li>ReactJs</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Django</li>
            </ul>
          </Card.Text>
          <Card.Link target={"_blank"} href="https://www.directaxistech.com/">
            https://www.directaxistech.com/
          </Card.Link>
          <h5 className={"mt-5"}>Php Laravel Developer</h5>
          <h6>
            Pixbit Solutions Pvt. Ltd, Calicut, India (05-10-2020 - 18-11-2022)
          </h6>
          <Card.Text>
            Project Integration, Project set up in server, Server management,
            Database designing and structuring, Multiple project handling,
            External library integration like twilio, vonage, spatie media,
            spatie backup, firebase, razorpay, braintree, google map apis,
            websocket, etc
          </Card.Text>
          <Card.Link target={"_blank"} href="https://pixbitsolutions.com">
            https://pixbitsolutions.com
          </Card.Link>
          <h5 className={"mt-5"}>Laravel Developer</h5>
          <h6>
            TutorHow Scientific Edutech Pvt. Ltd, Kerala, India (10-10-2019 -
            11-04-2020)
          </h6>
          <Card.Text>
            Six month internship in laravel framework, Project setup and
            management, etc
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
