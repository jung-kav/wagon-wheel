import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { copyright, privacyHref, privacyText, termsHref, termsText } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={{ span: 4, offset: 3 }} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
