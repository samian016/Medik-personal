import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
/* you might khow the component, yes this is navigation bar to navigate all  */
const Nevigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            <h2>Medik-Personal</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-primary align-items-md-center">
              <Nav.Link as={HashLink} className="navlink" to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink" to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink" to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink" to="/question">
                FAQ
              </Nav.Link>
              {/* here this will run when user is logged in , here is the logout button and user name */}
              {user?.email ? (
                <button
                  type="button"
                  onClick={logOut}
                  className="btn btn-danger me-3"
                >
                  Logout
                </button>
              ) : (
                <Nav.Link as={HashLink} className="navlink" to="/Login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <span className="ms-2 text-white fw-bold">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
