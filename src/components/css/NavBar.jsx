// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Filter from '../Filter';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Cart';

function NavBar() {
  const { loggedIn , logOutFunc } = useContext(CartContext);


  return (
    <>
      <div className='Nav'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to='/home'>Welcome!{loggedIn ? ' You are successfully logged in!' : ''}</Navbar.Brand>
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
                  <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                 {!loggedIn ? <Nav.Link as={Link} to='login' >Login</Nav.Link> : '' }
                  {/* <NavDropdown title="Search By Category" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="<#>">Men's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Women's Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Jewelery</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Electronics</NavDropdown.Item>
                  </NavDropdown> */}
                  
                  <Nav.Link as={Link} to='/checkout'  >Checkout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {loggedIn ? <button onClick={logOutFunc}>Logout</button> : ''}
      </div>
    </>
  );
}

export default NavBar;