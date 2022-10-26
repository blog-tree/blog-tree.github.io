import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MainTitle from "../../Content/TopicArticle/MainTitle/MainTitle";
import TextBlock from "../../Content/TopicArticle/Text/TextBlock";

const Freelance = () => {
    return (
        <>
            <section
                className={`section article`}
            >
                <Container>
                    <Row>
                        <Col xs lg="5" className="text-muted">
                            The best sources to find remote job
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <MainTitle>Freelance</MainTitle>

                    <TextBlock>
                        Links to resources
                        <ul>
                            <li><a href="https://www.upwork.com/" target={`_blank`}>UpWork</a></li>
                            <li><a href="https://www.toptal.com/" target={`_blank`}>Toptall</a></li>
                            <li><a href="https://www.linkedin.com/" target={`_blank`}>Linkedin</a></li>
                            <li><a href="https://www.peopleperhour.com/" target={`_blank`}>PeoplePerHour</a></li>
                            <li><a href="https://angel.co/jobs" target={`_blank`}>Angel</a> <span className={`text-muted`}>Jobs in Start Ups</span></li>
                            <li><a href="https://weworkremotely.com/" target={`_blank`}>WeWorkRemotely</a></li>
                            <li><a href="https://indeed.com" target={`_blank`}>Indeed</a></li>
                            <li><a href="https://www.fiverr.com/" target={`_blank`}>Fiverr</a></li>
                            <li><a href="https://remotive.com/" target={`_blank`}>Remotive</a></li>
                            <li><a href="https://remoteok.com/" target={`_blank`}>RemoteOk</a></li>
                            <li><a href="https://www.idealist.org/" target={`_blank`}>Idealist</a></li>
                            <li><a href="https://dribbble.com/" target={`_blank`}>Dribble</a> <span className={`text-muted`}>Design</span></li>
                            <li><a href="https://www.glassdoor.com/" target={`_blank`}>GlassDoor</a></li>
                            <li><a href="https://www.jobisjob.com/" target={`_blank`}>Jobisjob</a></li>
                            <li><a href="https://www.monster.com/" target={`_blank`}>Monster</a></li>
                            <li><a href="https://www.dice.com/" target={`_blank`}>Dice</a></li>
                            <li><a href="https://www.careerbuilder.com/" target={`_blank`}>CareerBuilder</a> <span className={`text-muted`}>USA</span></li>
                            <li><a href="https://www.reed.co.uk/" target={`_blank`}>Reed</a> <span className={`text-muted`}>UK</span></li>
                        </ul>
                    </TextBlock>
                </Container>
            </section>
        </>
    )
}

export default Freelance;
