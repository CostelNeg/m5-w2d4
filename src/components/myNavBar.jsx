import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav({ searchTerm, handleSearchChange }) {
  return (
    <>
      <Navbar className="d-flex flex-wrap flex-row" bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home" className="ms-3">
          EpiBooks
        </Navbar.Brand>
        <Nav className="d-flex ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
          <div className=" d-flex justify-content-center flex-wrap">
            <input
              type="text"
              placeholder="Cerca il tuo libro"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </Nav>
      </Navbar>
    </>
  );
}

export default MyNav;
