import "./Header.css";
import { useState } from "react";
import { Contacto } from "../../components/Contacto/Contacto";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [contacto, setContacto] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <header>
        <Contacto
          setContacto={setContacto}
          show={contacto}
          onHide={() => setContacto(false)}
        />
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Actuación</Nav.Link>
                <Nav.Link href="#direccion">Dirección</Nav.Link>
                <Nav.Link href="#docencia">Docencia</Nav.Link>
                <Nav.Link href="#festivales">Festivales</Nav.Link>
                <Nav.Link
                  href="/"
                  className="button-header-contact"
                  onClick={() => {
                    setContacto(!contacto);
                    setModalShow(false);
                  }}
                >
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
