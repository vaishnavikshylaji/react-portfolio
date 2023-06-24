import React from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import Header from "../../partials/Header";
const Login = () => {
  return (
    <>
      <Header title={"Admin Template"} />
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="mt-5 w-50">
          <Card.Header>
            <h5>User Login</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" />
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
                  <Form.Control type="password" />
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="button">
              Login
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

export default Login;
