import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


const Menu = () => {
  const { users, logOut } = useAuth();
//   console.log(users);
    return (
      <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
          <Container>
              <Navbar.Brand href="#home">Health Care</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/Services">Services</Nav.Link>
                  <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                  <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                  {users?.email ?
                      <Button onClick={logOut} variant="light">Logout</Button> :
                      <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
                  <Navbar.Text>
                      Signed in as: <a href="#login">{users?.email}</a>
                  </Navbar.Text>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  </>
    );
};

export default Menu;