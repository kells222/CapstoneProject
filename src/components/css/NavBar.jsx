// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Welcome!</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Product for sale
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <NavDropdown
                    title="Seach By Category"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Men's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Women's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Jewelery</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Electronics</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/guestcheckout">Checkout as Guest</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Products"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;