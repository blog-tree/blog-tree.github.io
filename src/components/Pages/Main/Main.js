import React from 'react';
import './Main.css';
import {Row, Col, Container} from "react-bootstrap";
import github_pages from './Img/GitHubPages.png';
import firebase from './Img/firebase.png';
import jenkins from './Img/jenkins.png';
import traefik from './Img/traefik.png';
import serverless from './Img/serverless.png';
import ansible from './Img/ansible.png';
import imgDev from './Img/software-development.jpg';
import imgQa from './Img/qa.png';
import imgPm from './Img/pm.jpg';
import imgTdd from './Img/testing_tdd.png';
import awsGlue from './Img/aws_glue.png';
import imgSdlc from './Img/sdlc.png';
import imgSdlcAgile from './Img/agile-sdlc.jpg';
import imgZsh from './Img/zsh.png';
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
                        <TopicRowComponent link={`/article/qa`}>
                            <TopicRowText>How to control the quality of production? QA Metrics, defect management,
                                automated testing.</TopicRowText>
                            <TopicRowH2>Quality Assurance</TopicRowH2>
                            <TopicRowImg src={imgQa} alt={`Quality Assurance`}/>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/traefik`}>
                            <TopicRowH2>Traefik to Dockerize local development</TopicRowH2>
                            <TopicRowImg src={traefik} alt={`Traefik`}/>
                            <TopicRowText><FormattedMessage id="content.traefik_description"/></TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/zsh`}>
                            <TopicRowImg src={imgZsh} alt={`Configuring Zsh`}/>
                            <TopicRowH2>Zsh Unix Terminal</TopicRowH2>
                            <TopicRowText>Shell designed for interactive use. My configuration to not lose it and DRY.
                            I do not want to repeat myself. Zsh Plugins, Themes and tricks.</TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/management`}>
                            <TopicRowText>Project management is the processes, methods, skills,
                                knowledge and experience to achieve specific project goals according
                                to the acceptance criteria.</TopicRowText>
                            <TopicRowImg src={imgPm} alt={`Project Management`}/>
                            <TopicRowH2>Project Management</TopicRowH2>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/tdd`}>
                            <TopicRowImg src={imgTdd} alt={`Test-Driven Development`}/>
                            <TopicRowH2>TDD</TopicRowH2>
                            <TopicRowText>Test-driven development is a software development process relying on
                                software requirements being converted to test cases before software is fully developed,
                                and tracking all software development by repeatedly testing the software against all
                                test cases. This is as opposed to software being developed first and test cases
                                created later.</TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/dev`}>
                            <TopicRowH2>Clean Software Development</TopicRowH2>
                            <TopicRowText>Coding best practices are a set of informal rules that the software
                                development community employs to help improve software quality.</TopicRowText>
                            <TopicRowImg src={imgDev} alt={`Software development best practices`}/>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/sdlc`}>
                            <TopicRowImg src={imgSdlc} alt={`Software Development Life Cycle`}/>
                            <TopicRowH2>SDLC</TopicRowH2>
                            <TopicRowText>Software Development Life Cycle or Software Development Process followed
                            for a software project within a software organization. Detailed plan of the project.</TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent link={`/article/agile`}>
                            <TopicRowText>
                                The most recognised methodology for developing a software environment to date.
                                You should use iterative development only on projects that you want to succeed.
                                The only way to go fast is to go well.
                            </TopicRowText>
                            <TopicRowH2>Agile</TopicRowH2>
                            <TopicRowImg src={imgSdlcAgile} alt={`Agile SDLC`}/>
                        </TopicRowComponent>
                    </Container>

                    <Container className="planned-topics">

                        <p className="vote-help">Vote for the topic if you want to read about it</p>

                        <TopicRowComponent>
                            <TopicRowH2><FormattedMessage
                                id="content.github_pages_title_small"
                                defaultMessage="Deployment to GitHub pages"
                            /></TopicRowH2>
                            <TopicRowImg src={github_pages} alt={`GitHub Pages`}/>
                            <TopicRowText><FormattedMessage id="content.github_pages_description"/></TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent>
                            <TopicRowText><FormattedMessage id="content.firebase_description"/></TopicRowText>
                            <TopicRowImg src={firebase} alt={`Firebase`}/>
                            <TopicRowH2><FormattedMessage id="content.firebase_title_small"/></TopicRowH2>
                        </TopicRowComponent>

                        <TopicRowComponent>
                            <TopicRowText><FormattedMessage id="content.jenkins_agent_description"/></TopicRowText>
                            <TopicRowImg src={jenkins} alt={`Jenkins`}/>
                            <TopicRowH2>Jenkins Agent</TopicRowH2>
                        </TopicRowComponent>

                        <TopicRowComponent>
                            <TopicRowImg src={serverless} alt={`Serverless framework`}/>
                            <TopicRowH2><FormattedMessage id="content.serverless_title_small"/></TopicRowH2>
                            <TopicRowText><FormattedMessage id="content.serverless_description"/></TopicRowText>
                        </TopicRowComponent>

                        <TopicRowComponent>
                            <TopicRowText><FormattedMessage id="content.ansible_description"/></TopicRowText>
                            <TopicRowImg src={ansible} alt={`Ansible`}/>
                            <TopicRowH2>Ansible</TopicRowH2>
                        </TopicRowComponent>

                        <TopicRowComponent>
                            <TopicRowH2>AWS Glue</TopicRowH2>
                            <TopicRowText><FormattedMessage id="content.aws_glue_description"/></TopicRowText>
                            <TopicRowImg src={awsGlue} alt={`AWS Glue`}/>
                        </TopicRowComponent>

                    </Container>
                </section>
            </>
        );
    }
}

export default Main;
