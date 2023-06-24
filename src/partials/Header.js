import { Container, Navbar } from "react-bootstrap";

function Header({ title }) {
  return (
    <>
      <Navbar bg="black">
        <Container className={"mt-2"}>
          <Navbar.Brand href="/home" className="text-white">
            {title}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
