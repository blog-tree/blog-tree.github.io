import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Footer.css';
import {FormattedMessage} from "react-intl";
import {Container, Row, Col} from "react-bootstrap";
import logo from "./Img/logo.png";

class Footer extends React.Component {
  
  render() {
    const year = new Date().getFullYear();
    return (
      <Router>
        <footer className="footer">
          <Container>
            <div className="line" />
            <Row>
              <Col>
                <img src={logo} alt={`Blog-Tree`} />
              </Col>
              <Col>
                <div className="block">
                  <h4 className="bolder title"><FormattedMessage
                    id = "content.about"
                    defaultMessage="About"
                  /></h4>
                  <Link to="license"><FormattedMessage
                    id = "content.license"
                    defaultMessage="License"
                  /></Link>
                  <br/>
                  <Link to="info"><FormattedMessage
                    id = "content.info"
                    defaultMessage="Info"
                  /></Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-muted mt-2">© { year } blog-tree.github.io</div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    );
  }
}

export default Footer;
