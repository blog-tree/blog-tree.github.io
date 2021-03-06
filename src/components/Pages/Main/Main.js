import React from 'react';
import './Main.css';
import {Row, Col, Container} from "react-bootstrap";
import github_pages from './Img/GitHubPages.png';
import firebase from './Img/firebase.png';
import jenkins from './Img/jenkins.png';
import traefik from './Img/traefik.png';
import serverless from './Img/serverless.png';
import ansible from './Img/ansible.png';
import awsGlue from './Img/aws_glue.png';
import TopicRowComponent from "../../Content/TopicRow/Row/TopicRowComponent";
import TopicRowH2 from "../../Content/TopicRow/H2/TopicRowH2";
import TopicRowImg from "../../Content/TopicRow/Img/TopicRowImg";
import TopicRowText from "../../Content/TopicRow/Text/TopicRowText";
import {FormattedMessage} from "react-intl";

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

              <TopicRowComponent>
                <TopicRowH2><FormattedMessage
                  id = "content.github_pages_title_small"
                  defaultMessage="Deployment to GitHub pages"
                /></TopicRowH2>
                <TopicRowImg src={github_pages} alt={`GitHub Pages`} />
                <TopicRowText><FormattedMessage id = "content.github_pages_description"/></TopicRowText>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowText><FormattedMessage id = "content.firebase_description"/></TopicRowText>
                <TopicRowImg src={firebase} alt={`Firebase`} />
                <TopicRowH2><FormattedMessage id = "content.firebase_title_small"/></TopicRowH2>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowImg src={traefik} alt={`Traefik`} />
                <TopicRowText><FormattedMessage id = "content.traefik_description"/></TopicRowText>
                <TopicRowH2>Traefik...</TopicRowH2>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowText><FormattedMessage id = "content.jenkins_agent_description"/></TopicRowText>
                <TopicRowImg src={jenkins} alt={`Jenkins`} />
                <TopicRowH2>Jenkins Agent</TopicRowH2>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowImg src={serverless} alt={`Serverless framework`} />
                <TopicRowH2><FormattedMessage id = "content.serverless_title_small"/></TopicRowH2>
                <TopicRowText><FormattedMessage id = "content.serverless_description"/></TopicRowText>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowText><FormattedMessage id = "content.ansible_description"/></TopicRowText>
                <TopicRowImg src={ansible} alt={`Ansible`} />
                <TopicRowH2>Ansible</TopicRowH2>
              </TopicRowComponent>

              <TopicRowComponent>
                <TopicRowH2>AWS Glue</TopicRowH2>
                <TopicRowText><FormattedMessage id = "content.aws_glue_description"/></TopicRowText>
                <TopicRowImg src={awsGlue} alt={`AWS Glue`} />
              </TopicRowComponent>

            </Container>
          </section>
      </>
    );
  }
}

export default Main;
