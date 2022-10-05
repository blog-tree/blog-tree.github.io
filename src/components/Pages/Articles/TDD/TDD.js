import React from 'react';
import './TDD.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";

class TDD extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Test-Driven Development
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>TDD</MainTitle>

                        <SectionTitle>The Three Rules of TDD</SectionTitle>
                        <TextBlock>
                            TDD can be described with three simple rules.
                            <ul>
                                <li>Do not write any production code until you have first written a test that fails
                                    due to the lack of that code.</li>
                                <li>Do not write more of a test than is sufficient to fail—and failing to compile
                                    counts as a failure.</li>
                                <li>Do not write more production code than is sufficient to pass the currently
                                    failing test.</li>
                            </ul>
                        </TextBlock>

                    </Container>
                </section>
            </>
        );
    }
}

export default TDD;
