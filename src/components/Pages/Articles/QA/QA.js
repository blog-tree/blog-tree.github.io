import React from 'react';
import './QA.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import imgDt1 from "./Img/dt.png";
import imgDt2 from "./Img/dt2.png";
import TopicRowImg from "../../../Content/TopicRow/Img/TopicRowImg";

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
                        </TextBlock>
                        <TextBlock>
                            Have include
                            <ul>
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
                        </TextBlock>

                        <TextBlock>
                            Can include
                            <ul>
                                <li>How the team will organize testing</li>
                                <li>Which testing types will be in scope to address product risks</li>
                                <li>Which test design and execution approaches the team will use for a testing type</li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Test case management</SectionTitle>

                        <TextBlock>Correct test case management decrease duplication of tests, adds standards of testing,
                        centralize metrics and reports, provides history of changes, verify test completion, documentation.</TextBlock>

                        <TextBlock>
                            <ul>
                                <li>Test Case. <span className={`text-muted`}>Steps to verify that it works.</span></li>
                                <li>Test Suite. <span className={`text-muted`}>Collection of test cases to verify
                                functionality</span> <br/>
                                    <ul>
                                        <li><b>Sanity</b> Checks if the bugfix fixed the bug.</li>
                                        <li><b>Smoke</b> Checks basic functionality.</li>
                                        <li><b>Regression</b> Checks existing functionality (to verify
                                            that changes don't break anything).</li>
                                        <li><b>UI</b> Checks how user interacts with app.</li>
                                        <li><b>Performance</b> Checks and measures the performance of the system under
                                            different loads</li>
                                        <li><b>API</b> Checks functionality, performance, security of API</li>
                                    </ul>
                                </li>
                                <li>Test Plan. <span className={`text-muted`}>Scope of testing, resources, complete
                                    timeline of test activities.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Tests Design</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Boundary Value Analysis <b>BVA</b>. <span className={`text-muted`}>Edge cases
                                should be tested.</span></li>
                                <li>Equivalence Partitioning <b>EP</b>. <span className={`text-muted`}>Tests must be
                                    created to cover all conditions in the code.</span></li>
                                <li>Decision table <b>DT</b>. <span className={`text-muted`}>A concise visual representation for
                                    specifying which actions to perform depending on given conditions.</span> <br/>
                                    <div className="row">
                                        <div className="col-6">
                                            <TopicRowImg src={imgDt1} alt={`DT1`}/>
                                        </div>
                                        <div className="col-6">
                                            <TopicRowImg src={imgDt2} alt={`DT2`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>State Transition Diagram. <span className={`text-muted`}>A state diagram is a type
                                    of diagram used in computer science and related fields to describe the behavior
                                    of systems.</span></li>
                                <li>Use Case Testing. <span className={`text-muted`}>Is a brief description of a
                                    particular use of the software application by an actor or user.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Test Case Life Cycle</SubSectionTitle>
                        <TextBlock>
                            The test case life cycle documents each step you will take before and after writing your
                            test cases.
                            <ul>
                                <li>Requirements analysis. <span className={`text-muted`}>Getting all the data that we
                                need for test creation (Environments to run tests on, tools, income data for the
                                    test).</span></li>
                                <li>Test Case.</li>
                                <li>Mapping. <span className={`text-muted`}>Map requirements to test case to verify that
                                all requirements covered with test case.</span></li>
                                <li>Review. <span className={`text-muted`}>
                                    <ol>
                                        <li>Self-Review. Test should be created according to SRC (<b>Software
                                            Requirement Specification</b>) describes the software’s purpose and FRD
                                        (<b>Functional Requirements Document</b>) is similar to a contract stating the
                                            functional requirements needed for software to meet agreed-upon
                                            capabilities.</li>
                                        <li>Peer Review. Another tester reviews it.</li>
                                        <li>Supervisor Review. If lead/architect should review it.</li>
                                    </ol>
                                </span></li>
                                <li>Execution. <span className={`text-muted`}>Run test case (define how and who should
                                    run the test and run it).</span></li>
                                <li>Regression testing. <span className={`text-muted`}>Run all other tests to check
                                that this functionality doesn't break anything else.</span></li>
                                <li>Test Case Inspection. <span className={`text-muted`}>Review all tests to identify
                                duplications.</span></li>
                            </ul>
                        </TextBlock>

                        <TextBlock>
                            Peer review or Self-review, what to check?
                            <ul>
                                <li>Functionality Coverage. <span className={`text-muted`}>Check that test case covers
                                full functionality that should be checked.</span></li>
                                <li>Spelling.</li>
                                <li>Grammar.</li>
                                <li>Template/Standards. <span className={`text-muted`}>All test cases should have the
                                same standard view.</span></li>
                                <li>Clear description in common for all testers words.</li>
                                <li>Duplication.</li>
                                <li>Obsolescence. <span className={`text-muted`}>Test could be redundant or obsolete
                                    and must be removed.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Test Coverage</SubSectionTitle>
                        <TextBlock>Metric that shows how many requirements have tests.</TextBlock>

                        <TextBlock>
                            <b>Requirement Test Coverage Report</b>
                            <ul>
                                <li>Status of the testing. <span className={`text-muted`}>Passed and Failed test
                                    cases.</span></li>
                                <li>Track which requirement are covered with what test cases.</li>
                                <li>Track requirements without tests.</li>
                            </ul>
                        </TextBlock>

                        <TextBlock>
                            <b>Requirement Traceability Matrix</b>
                            <ul>
                                <li>Document that delivered at the conclusion of <span title={`software development
                                 life cycle`}>SDLC</span>.</li>
                                <li>All requirements and test cases to them.</li>

                            </ul>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default QA;
