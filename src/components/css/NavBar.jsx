// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Filter from '../Filter';

function NavBar() {


  return (
    <>
      <div className='Nav'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/home">Welcome!</Navbar.Brand>
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  {/* <NavDropdown title="Search By Category" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="<#>">Men's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Women's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Jewelery</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Electronics</NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link href="/checkout">Checkout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

export default NavBar;