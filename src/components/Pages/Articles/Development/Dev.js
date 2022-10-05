import React from 'react';
import './Dev.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";

class Dev extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Best Practices of Software Development.
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Software Development</MainTitle>

                        <TextBlock>
                            Software development has not a big but really fast history, so there are a lot of tools,
                            practices, documented solutions.
                        </TextBlock>

                        <SectionTitle>Quality of the code.</SectionTitle>

                        <TextBlock><b>High-Quality Code</b> &mdash; The code with both Functional and Structural high quality.</TextBlock>

                        <SubSectionTitle>Functional Code Quality</SubSectionTitle>

                        <TextBlock>What code Does? Includes Unit and Functional Tests. </TextBlock>

                        <SubSectionTitle>Structural Code Quality</SubSectionTitle>

                        <TextBlock>
                            How code Looks? Code review and Static code analysis.
                            <ul>
                                <li>Clear.<br /><span className={`text-muted`}>Code looks like a poem, and when anyone
                                reads it he can understand what it is all about.</span></li>
                                <li>Maintainable.<br /><span className={`text-muted`}>It's easy to add new code or
                                change the old one.</span></li>
                                <li>Standardised.<br /><span className={`text-muted`}>The same code style for everyone.</span></li>
                                <li>Testable.<br /><span className={`text-muted`}>Each feature can be tested independently.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Coding Standards.</SectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Style Guide.
                                    <br /><span className={`text-muted`}>A style guide is responsible for visual representation of the source code and it depends on the programming language. This doesn’t usually include any information about naming and design patterns.</span>
                                    <br /><span className={`text-muted`}>How code looks:
                                layout; how to use whitespaces/tabs in the code; names of variables, functions, classes, etc.</span></li>
                                <li>Principles.
                                    <br/><span className={`text-muted`}>Coding principles are responsible for source code structure to ensure its readability and modifiability.</span>
                                    <br /><span className={`text-muted`}>Design (SOLID, KISS, YAGNI,
                                    Patterns, etc.); Code structure (lines in methods, parameters in functions, etc.);
                                    Language constructions (Exceptions, breakouts, conditions usages).</span></li>
                                <li>Project specific Conventions.
                                    <br /><span className={`text-muted`}>Project-specific code conventions explain project-specific implementation and extended coding principles.</span>
                                    <br /><span className={`text-muted`}>Everything else,
                                    that helps to write the code in the consistent way.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Code Quality Metrics.</SectionTitle>

                        <TextBlock>Each developer has own high-quality metrics. But there are metrics that allow to have
                        standards for everyone.</TextBlock>

                        <TextBlock>
                            <ul>
                                <li>Cyclomatic Complexity.<br /><span className={`text-muted`}>Measures the structural
                                    complexity of code. It refers to the number of decisions in the source code.
                                    The higher the cyclomatic complexity, the more complex the code.</span></li>
                                <li>Class Coupling.<br /><span className={`text-muted`}>How many classes a single class uses.
                                    The lower the value, the better. Good software design requires low coupling; designs
                                    with high coupling are difficult to reuse and maintain.</span></li>
                                <li>Class Hierarchy, or a Depth of Inheritance Tree (DIT).<br /><span
                                    className={`text-muted`}>complexity of the class hierarchy in object-oriented
                                    programming. It shows how object classes are derived from other classes. The higher
                                    the DIT, the more complex the software.</span></li>
                                <li>Duplications.</li>
                                <li>Method Cohesion.<br /><span className={`text-muted`}>A method should explicitly
                                    state why it is written. Otherwise, it lacks cohesion. High cohesion means that
                                    methods of the class are codependent and form a logical whole, whereas low cohesion
                                    results in huge classes that are difficult to understand and maintain.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Example of Code Quality for the team</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Onboarding for newcomers.</li>
                                <li>Agreement of the how code should be developed.</li>
                                <li>Processes and tools in place for testing to ensure coding standards.</li>
                                <li>A style guide to keep everyone’s code clean and consistent.</li>
                                <li>Documentation of any project specific information.</li>
                                <li>Coding principles for the project.</li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Testing</SectionTitle>

                        <TextBlock><b>The Scope of Testing</b> &mdash; what areas, features, and functionalities of an
                            application should be tested.</TextBlock>

                        <SubSectionTitle>Testing levels</SubSectionTitle>

                        <TextBlock>
                            <li>Unit tests.<br /><span className={`text-muted`}>Least time and cost. Test only the small
                            function without any dependencies.</span></li>
                            <li>Integration tests (API Tests, External Web Integration Tests, or Component Tests).
                                <br /><span className={`text-muted`}>Interaction of a piece of code with external
                                    components.</span></li>
                            <li>UI Tests (End-to-End Tests, Acceptance Tests).<br /><span className={`text-muted`}>The
                            most heavy tests, to test it we should run an application.</span></li>
                        </TextBlock>

                        <SubSectionTitle>Unit Tests</SubSectionTitle>

                        <TextBlock>
                            <blockquote className={`blockquote`}>77% of the failures can be reproduced by a unit
                                test.</blockquote>
                        </TextBlock>

                        <TextBlock><b>Unit Test</b> &mdash; is a short program fragment written and maintained by the
                            developers on the product team, which exercises some narrow part of the product’s source
                            code and checks the results.</TextBlock>

                        <TextBlock><b>Maintainability</b> &mdash;  is the ability to change, understand, and test an
                            application easily. Unit tests make code easier to change, to understand, to test.</TextBlock>

                        <TextBlock>Exceptions. Proofs-of-concept (POCs) or conference demos―and projects with a very
                                short timeline (less than three months).</TextBlock>

                        <SubSectionTitle>F.I.R.S.T. from Robert Martin</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li><b>Fast</b></li>
                                <li><b>Independent</b> <span className={`text-muted`}>Works independently in
                                    different order with others.</span></li>
                                <li><b>Repeatable</b> <span className={`text-muted`}>In any environment.</span></li>
                                <li><b>Self-Validating</b> <span className={`text-muted`}>Only one logic to be tested
                                    by the test.</span></li>
                                <li><b>Timely</b> <span className={`text-muted`}>Created before or at the same time
                                    with the code.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Code Coverage</SubSectionTitle>

                        <TextBlock>One hundred percent unit test coverage is not enough to guarantee high code quality.</TextBlock>
                        <TextBlock>Code coverage is a metric that shows how many rows of code were run and the total
                        numbers of lines in the code.</TextBlock>

                        <SectionTitle>Code Review</SectionTitle>

                        <TextBlock>The process when team members check the code written by other team members.
                            Follow the coding standards. Validate business logic. Validate unit tests for changed logic
                            as a part of the code review process.</TextBlock>

                        <SectionTitle>Knowledge Sharing</SectionTitle>

                        <SubSectionTitle>Goals of the knowledge sharing</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Maintain the project</li>
                                <li>Share standards and best practices</li>
                                <li>Right priorities for every team member</li>
                                <li>Decrease time of one to one knowledge sharing</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Software Development Life Cycle</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Different reviewers for pull requests.</li>
                                <li>One developer never works on the same kind of tasks.</li>
                                <li>Always update Knowledge Base, not after but at the same time when you develop/update a feature.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Knowledge Base</SubSectionTitle>

                        <TextBlock>
                            <span className={`text-muted`}>Confluence, Wiki, etc.</span>
                            <ul>
                                <li>The project goal and description.</li>
                                <li>The team structure and roles.</li>
                                <li>Links to environments.</li>
                                <li>Standards and practices.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Onboarding</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li>Newcomers Guide. <span className={`text-muted`}>Small TODO list with information what
                                    to do and in what order (create email, create account, configure authenticator, etc.).
                                    The List of goto persons (the table with contacts of someone who can solve
                                    something). Links or instructions of how to install the project.</span></li>
                                <li>Small demo. <span className={`text-muted`}>Someone from the team can show and explain
                                general picture of the project.</span></li>
                                <li>Mentor. <span className={`text-muted`}>Someone who can help at the first time in
                                the project.</span></li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>Technical Debt</SectionTitle>

                        <TextBlock></TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Dev;
