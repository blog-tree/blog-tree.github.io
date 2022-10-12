import React from 'react';
import './QA.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";

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

                        <SubSectionTitle>Attributes</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Functionality. <span className={`text-muted`}>How well it works according to
                                technical specification</span></li>
                                <li>Availability. <span className={`text-muted`}>Amount of time the application
                                    software is available to users</span></li>
                                <li>Performance. <span className={`text-muted`}>How quickly the application completes
                                    required functions.</span></li>
                                <li>Testability. <span className={`text-muted`}>How easy it can be tested.</span></li>
                                <li>Security. <span className={`text-muted`}>possible breaches or catastrophic
                                    losses.</span></li>
                                <li>Usability. <span className={`text-muted`}>How simple is UI (User Interface)</span></li>
                                <li>Reliability. <span className={`text-muted`}>Hos stable the system is</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>QA building blocks</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Quality Assurance. <span className={`text-muted`}>From development to
                                    delivery.</span></li>
                                <li>Quality Control. <span className={`text-muted`}>Part of QA &urarr;. Quality of
                                    software.</span></li>
                                <li>Testing. <span className={`text-muted`}>Part of quality control &uarr;. Quality of
                                functionality.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>QA Implementation</SectionTitle>

                        <SubSectionTitle>Benefits</SubSectionTitle>

                        <TextBlock>
                            How to ensure management to use testing.
                            <ul>
                                <li>Product Quality. <span className={`text-muted`}>QA allows to check complete
                                    functionality, how it works on multiple devices, platforms. It controls amount of
                                bugs.</span></li>
                                <li>User Experience (UX). <span className={`text-muted`}>Aimed at exploring user
                                    expectations.</span></li>
                                <li>Reducing the Costs of Bugs. <span className={`text-muted`}>Finding bugs as early as
                                    possible will cost cheaper then fixing them after deployment.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Types of Testing</SectionTitle>

                        <TextBlock>Developers and test engineers should be familiar with each type since each is
                            necessary to ensure an application’s success.</TextBlock>

                        <SubSectionTitle>Manual Testing</SubSectionTitle>

                        <TextBlock>Manual testing is a software testing process in which test cases are executed
                            manually without using any automated tool. <br/>
                            Good: identify defects that automation tools may miss. <br/>
                            Bad: may be difficult, take a lot of time, boring, repetitive, less accurate than
                            automated.</TextBlock>

                        <SubSectionTitle>Automated Testing</SubSectionTitle>

                        <TextBlock>Automate routine operations. <br/>
                            Good: Reduce cost of repetitive manual tests, increase accuracy. <br/>
                            Bad: Cannot be applied to every aspect of testing. Limited by tools of auto-testing.
                        </TextBlock>

                        <SubSectionTitle>Functional Testing</SubSectionTitle>

                        <TextBlock>Checks that the system works as expected by the busyness requirements.
                        Can be manual and automated.</TextBlock>

                        <TextBlock>Non-Functional Testing</TextBlock>

                        <TextBlock>Verifies performance, usability, reliability...</TextBlock>

                        <SectionTitle>Testing Methods</SectionTitle>

                        <TextBlock>
                            <b>White box, structural testing, unit tests</b> Unit-Level of testing. Can uncover structural
                            problems, hidden errors and problems with specific components.
                        </TextBlock>

                        <TextBlock>
                            <b>Black box testing</b> checks that the system as a whole is working as expected.
                        </TextBlock>

                        <TextBlock>
                            <b>Grey box besting</b> integration testing, end-to-end system testing, and
                            penetration testing [pen test, is a simulated cyber attack against your computer system to
                            check for exploitable vulnerabilities].
                        </TextBlock>

                        <SectionTitle>Characteristics of failure</SectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Errors. <span className={`text-muted`}>Made by a developer while writing the
                                    code, including any possible misunderstandings of the requirements or intended
                                    functionality.</span></li>
                                <li>Failures. <span className={`text-muted`}>The application code is not functioning or
                                    is unable to function as expected.</span></li>
                                <li>Defects/Bugs. <span className={`text-muted`}>The code does not produce an expected
                                    result.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Software Testing Life Cycle (STLC)</SectionTitle>

                        <TextBlock>
                            It is not required, but as an example.
                            <ul>
                                <li>Requirement Analysis. <span className={`text-muted`}>Understanding of what should be
                                tested and how. Invite clients to do it together.</span></li>
                                <li>Test Planning. <span className={`text-muted`}>Priorities, goals, strategy,
                                    resources.</span></li>
                                <li>Test Case. <span className={`text-muted`}>Design of test cases.</span></li>
                                <li>Test Environment Setup. <span className={`text-muted`}>Environment for
                                    testers.</span></li>
                                <li>Test Execution. <span className={`text-muted`}>Testing itself.</span></li>
                                <li>Test Closure. <span className={`text-muted`}>Test results reporting.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Testing Documentation</SectionTitle>

                        <TextBlock>Allows developers and specialists to keep each testing artifact stored and cataloged
                            accurately.</TextBlock>

                        <SubSectionTitle>Test Plan</SubSectionTitle>
                        <TextBlock>
                            Focuses on the "what" and the "when" of testing.
                            <ul>
                                have to include:
                                <li>A project-specific impact on testing</li>
                                <li>The scope of testing</li>
                                <li>Quality and acceptance criteria</li>
                                <li>Risk management</li>
                                <li>The test team, test schedule, and test deliverables</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Test Strategy</SubSectionTitle>
                        <TextBlock>
                            Focuses on the "how" of testing.
                            <ul>
                                Can include:
                                <li>How the team will organize testing</li>
                                <li>Which testing types will be in scope to address product risks</li>
                                <li>Which test design and execution approaches the team will use for a testing type</li>
                            </ul>
                        </TextBlock>

                    </Container>
                </section>
            </>
        );
    }
}

export default QA;
