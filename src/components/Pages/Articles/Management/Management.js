import React from 'react';
import './Management.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";

class Management extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Management of the project
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Management</MainTitle>

                        <SectionTitle>Before the project start</SectionTitle>
                        <TextBlock>
                            Main questions that should be answered.
                            <ul>
                                <li>Will the project be cancelled?</li>
                                <li>Will it be used?</li>
                                <li>How quickly will it be used?</li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Cost of delay</SectionTitle>

                        <TextBlock>
                            <blockquote className={`blockquote`}>Opportunity costs of not building those features per unit
                            time (day, week, month ...). That's how you can prioritize the features.</blockquote>
                        </TextBlock>

                        <SectionTitle>High performance program management</SectionTitle>

                        <TextBlock>
                            Principles
                            <ol>
                                <li>Measurable outcomes at the program level.</li>
                                <li>Teams work to design and test hypotheses.</li>
                                <li>Fast feedbacks.</li>
                                <li>Small batches.</li>
                                <li>Culture of experimentation.</li>
                            </ol>
                        </TextBlock>

                        <SubSectionTitle>Impact mapping</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Create an idea. <span className={`text-muted`}>Reduce transaction cost by 10%</span></li>
                                <li>Decide who can help or will be touched with this idea. <span
                                    className={`text-muted`}>How stakeholders can help or hinder that outcome being
                                achieved.</span></li>
                                <li>What? <span className={`text-muted`}>What we can do to achieve this.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Hypothesis-driven delivery</SubSectionTitle>
                        <TextBlock>We believe that <span className={`text-muted`}>[building this feature] [for these people]</span> <br/>
                            will achieve <span className={`text-muted`}>[this outcome]</span>. <br/>
                                We will know that we are successful when we see <span className={`text-muted`}>[this signals from users]</span></TextBlock>

                        <SubSectionTitle>Experiments</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Surveys</li>
                                <li>A/B testing</li>
                                <li>Usability.</li>
                            </ul>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Management;
