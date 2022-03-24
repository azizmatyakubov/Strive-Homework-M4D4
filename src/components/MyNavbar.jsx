import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ position: "sticky", top: 0, zIndex: 999 }}
    >
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav>
            <Link to={"/register"}>
              <div
                className={
                  location.pathname === "/register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Register
              </div>
            </Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
