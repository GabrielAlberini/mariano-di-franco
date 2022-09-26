import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Actuación</Nav.Link>
                <Nav.Link href="#direccion">Dirección</Nav.Link>
                <Nav.Link href="#docencia">Docencia</Nav.Link>
                <Nav.Link href="#festivales">Festivales</Nav.Link>
                <Nav.Link href="#link" className="button-header-contact">
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export { Header };
