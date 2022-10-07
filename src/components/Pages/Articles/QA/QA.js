import React from 'react';
import './QA.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";

class QA extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Best Practices of Quality Assurance.
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Quality Assurance</MainTitle>

                        <TextBlock>
                            The core purpose of Quality Assurance is to prevent mistakes and defects in the
                            development and production
                        </TextBlock>

                        <SubSectionTitle>What is QAble?</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Functionality.</li>
                                <li>Availability.</li>
                                <li>Performance.</li>
                                <li>Testability.</li>
                                <li>Security.</li>
                                <li>Usability.</li>
                                <li>Reliability.</li>
                            </ul>
                        </TextBlock>

                    </Container>
                </section>
            </>
        );
    }
}

export default QA;
