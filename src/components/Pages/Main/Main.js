import React from 'react';
import './Main.css';
import {Row, Col, Container} from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
      <>
          <section
            className={`section align-item-center`}
          >
            <Container>
              <Row>
                <Col xs lg="5" className="text-muted">
                  Software Developer Log
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Deploy to github pages</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Deploy to GCP fire</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Jenkins-Agent for deployment</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Serverless Bref Lambda project</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Local Traefik</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col sm={2}>
                      <h2>Ansible</h2>
                    </Col>
                    <Col sm={2}>
                      Image
                    </Col>
                    <Col sm={8}>
                      <div>Article description and content</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
      </>
    );
  }
}

export default Main;
