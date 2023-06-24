import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import Header from "../../partials/Header";
const Register = () => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let newData = { ...formData, [name]: value };
    setFormData(newData);
  };

  const handleRegister = () => {
    axios.post('https://example.com/api/data', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Header title={"Admin Template"} />
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="mt-5 w-50">
          <Card.Header>
            <h5>Registration</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Name
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Confirm Password
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    type="password"
                    name="confirm_password"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="button" onClick={handleRegister}>
              Register
            </Button>
            <Button variant="danger" type="button" className="ms-2">
              Reset
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Register;
