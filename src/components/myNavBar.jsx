import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home" className="ms-3">EpiBooks</Navbar.Brand>
          <Nav className="d-flex ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar>

    </>
  );
}

export default MyNav;
