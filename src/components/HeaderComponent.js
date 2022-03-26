import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/employees" style={{ textDecoration: "none" }}>
          <Navbar.Brand> React Bootstrap</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
