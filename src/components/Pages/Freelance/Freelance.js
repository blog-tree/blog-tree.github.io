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
                            The best sources to find jobs
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <MainTitle>Agile in the the software development life cycle.</MainTitle>
                </Container>

                <TextBlock>
                    UpWork
                    Toptall
                    Linkedin
                    PeoplePerHour
                    https://angel.co/jobs - jobs in startUps
                    https://weworkremotely.com/ remote workers
                    https://indeed.com
                    https://www.fiverr.com/
                    https://remotive.com/
                    https://remoteok.com/
                    https://www.idealist.org/
                    https://dribbble.com/ design mostly
                    https://www.glassdoor.com/
                    https://www.jobisjob.com/
                    https://www.monster.com/
                    https://www.dice.com/
                    https://www.careerbuilder.com/ - USA
                    https://www.reed.co.uk/ - UK
                </TextBlock>
            </section>
        </>
    )
}

export default Freelance;
