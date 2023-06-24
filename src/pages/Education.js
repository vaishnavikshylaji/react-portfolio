import { Card } from "react-bootstrap";

function Education() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Bachelor of Technology</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Ilahia College of Engineering and Technology (ICET), Muvattupuzha
            (2017-2020)
          </Card.Subtitle>
          <p>
            Completed professional degree in Computer Science and Engineering.
          </p>

          <Card.Link target={"_blank"} href="https://www.icet.ac.in/">
            https://www.icet.ac.in/
          </Card.Link>

          <Card.Title className={"mt-5"}>Diploma</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Govt. Residential Women's Polytechnic College (RWPC), Payyannur
            (2014-2017) (2017-2020)
          </Card.Subtitle>
          <p>Completed three year in Computer Science and Engineering.</p>

          <Card.Link target={"_blank"} href="https://grwpcpnr.ac.in/">
            https://grwpcpnr.ac.in/
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Education;
