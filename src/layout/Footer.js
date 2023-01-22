import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white pd-3 text-uppercase fixed-bottom"
    >
      Github search app with firebase
    </Container>
  );
};

export default Footer;
