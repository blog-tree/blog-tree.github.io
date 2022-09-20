import React from 'react';
import './Agile.css';
import imgAgile from './Img/agile.jpg';
import imgFourQuadrant from './Img/four-quadrant.jpg';
import imgServers from './Img/Servers.jpg';
import {Row, Col, Container} from "react-bootstrap";
import TopicRowImg from "../../../Content/TopicRow/Img/TopicRowImg";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";

class Agile extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Agile Approach in the Software Development Project
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Agile in the the software development life cycle.</MainTitle>

                        <TextBlock>
                            <b>Software Development Life Cycle (SDLC)</b> — the phases a project undergoes end-to-end —
                            to manage resources, control costs, anticipate possible risks, and track the progress of
                            each process required to develop a high-quality product.
                            Two of the most common are <i>Waterfall</i> and a <i>Scrum-based Agile</i> SDLC.
                        </TextBlock>

                        <TextBlock>Software development plan always has frozen date (dead line) and has requirements
                            which are continuously changing.</TextBlock>

                        <SectionTitle>Agile</SectionTitle>

                        <div>
                            <TopicRowImg src={imgAgile} alt={`Agile`}/>
                        </div>

                        <blockquote className={`blockquote`}>Why it names Agile? Because it was the best of the worst
                            names.
                        </blockquote>

                        <TextBlock><b>Agile</b> is the idea of choosing small goals to make them intuitive.</TextBlock>

                        <TextBlock><b>Agile</b> creates <b>Minimum Viable Product (MVP)</b> to test a business
                            idea.</TextBlock>

                        <TextBlock><b>Agile</b> is about knowing where we are.</TextBlock>

                        <TextBlock><b>Agile</b> is a process wherein a project is
                            subdivided into iterations. Quality high, Schedule is flexible..</TextBlock>

                        <TextBlock><b>Agile</b> is a value-driven approach to developing solutions. It is focused on
                            people, adaptability, and providing maximum value to customers.</TextBlock>

                        <TextBlock>
                            Central idea of Agile <span className={`text-muted`}>four values</span>
                            <ol>
                                <li>Individuals and Interactions over processes and tools.<br/>
                                    <span className={`text-muted`}>(A team is more valuable than the processes they follow or the tools they use)</span>.
                                </li>
                                <li>Working Software over comprehensive documentation.<br/>
                                    <span className={`text-muted`}>(Working software is main goal, then we can write documentation)</span>
                                </li>
                                <li>Customer Collaboration over contract negotiation.<br/>
                                    <span className={`text-muted`}>(Software can't be documented before development is done)</span>
                                </li>
                                <li>Responding to Change over following plan.<br/>
                                    <span className={`text-muted`}>(A customer can change the requirements when the project is in development)</span>
                                </li>
                            </ol>
                        </TextBlock>

                        <SubSectionTitle>Agile Principles</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Our highest priority is to satisfy the customer through early and continuous
                                    delivery of valuable software.
                                </li>
                                <li>Welcome changing requirements, even late in development. Agile processes harness
                                    change for the customer’s competitive advantage.
                                </li>
                                <li>Deliver working software frequently, from a couple of weeks to a couple of months,
                                    with a preference to the shorter timescale.
                                </li>
                                <li>Businesspeople and developers must work together daily throughout the project.</li>
                                <li>Build projects around motivated individuals. Give them the environment and support
                                    they need, and trust them to get the job done.
                                </li>
                                <li>The most efficient and effective method of conveying information to and within a
                                    development team is face-to-face conversation.
                                </li>
                                <li>Working software is the primary measure of progress.</li>
                                <li>Agile processes promote sustainable development. The sponsors, developers, and users
                                    should be able to maintain a constant pace indefinitely.
                                </li>
                                <li>Continuous attention to technical excellence and good design enhances agility.</li>
                                <li>Simplicity — the art of maximizing the amount of work not done — is essential.</li>
                                <li>The best architectures, requirements, and designs emerge from self-organizing
                                    teams.
                                </li>
                                <li>At regular intervals, the team reflects on how to become more effective, then tunes
                                    and adjusts its behavior accordingly.
                                </li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Best Practices for Agile</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Create and maintain a product backlog that is used as a single source for your
                                    tasks.
                                </li>
                                <li>Update and prioritize a backlog regularly with the team.</li>
                                <li>Create a business roadmap aligned with the product backlog.</li>
                                <li>Have regular sprint reviews.</li>
                                <li>A Product Owner provides detailed positive or negative feedback on regular sprint
                                    reviews.
                                </li>
                                <li>Re-prioritize a backlog based on the feedback from PO and stakeholders during
                                    regular demo/review sessions.
                                </li>
                                <li>Involve the whole team in the decision negotiations.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>What it is to be an agile engineer</SubSectionTitle>
                        <TextBlock>
                            <b>Behaviour patterns.</b>
                            <ul>
                                <li>One of the Agiles goal is knowledge sharing.
                                    <span className={`text-muted`}>A cross-functional team is comprised of specialists
                                        with expertise in different areas and whose skill sets complement those of
                                        the other team members.</span></li>
                                <li>Each team member of the agile team is aware of business goals and align all work
                                    with them.
                                    They also feel empowered to make team decisions.
                                </li>
                                <li>No one is afraid of making mistakes, and no one hides their failures. Reporting
                                    obstacles in time.
                                </li>
                                <li>Cross-functional teams enable self-organization.
                                    <span className={`text-muted`}>Each team member knows how to solve the task at hand, who to ask for explanations or who to work
                                    with in the team. There is no need for a separate manager or observer to carry out the task at
                                    hand.</span></li>
                                <li>Agile engineers demonstrate collective responsibility for teamwork and project
                                    outcomes.
                                    <span className={`text-muted`}>Each team member is responsible for the team, not only for his own task.</span>
                                </li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>DoD & DoR</SubSectionTitle>

                        <TextBlock><b>Definition of Ready (DoR)</b> criteria to ensure that the requirements are
                            clear and your team
                            will be able to measure each task’s completion.</TextBlock>

                        <TextBlock><b>Definition of done (DoD)</b> for development activities, which stands for a set of
                            rules, checks,
                            and quality gates that a task should pass.</TextBlock>

                        <SubSectionTitle>Agile process</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Iteration Zero (Index Cards)<br/>
                                    <span className={`text-muted`}>Create index cards with main functionality of the
                                        project (small amout of the most general cards, f.e. 5)</span></li>
                                <li>Estimation<br/>
                                    <ul>
                                        <li><b>Trivariate estimates</b> (95% done in 3 weeks, 50% done in 2 weeks, 5%
                                            done in 1 week)
                                        </li>
                                        <li><b>Story points</b> (estimation is not a time but an efforts to solve the task)</li>
                                    </ul>
                                </li>
                                <li>Stakeholders game<br/>
                                    ROI - Return on investment calculation. How to decide that the task is needed and
                                    when.
                                    <TopicRowImg src={imgFourQuadrant} alt={`Four-quadrant`}/>
                                </li>
                                <li>After a task passes the DoD, the development phase is over, and testers can start
                                    verifying the
                                    piece of code. But someones told that DoD is when Acceptance Tests passed.
                                </li>
                                <li>Planning Iteration<br/>
                                    Iteration Planning Meeting (IPM) - 1/20 of the iteration. The IPM for a two-week
                                    iteration is
                                    about a half a day.
                                    Participants: all involved to the project
                                    Inputs: ordered (by stackholders) list of tasks.
                                </li>
                                <li>Pulse check/Midpoint check<br/>
                                    The meeting at the midpoint of the iteration/sprint, when team can move out the
                                    tickets to the
                                    backlog, from the sprint.
                                    So the sprint capacity/velocity decreased, managers informed, and iteration is not
                                    failed. After
                                    that, new sprint velocity should be taken in the next sprint (it's called
                                    yesterday's weather).
                                </li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Stories</SubSectionTitle>
                        <TextBlock><b>User stories</b> - statements to define (remind of) feature.</TextBlock>

                        <SubSectionTitle>Stories <u>INVEST</u> Guidelines</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Independent - user stories are independent of each other.</li>
                                <li>Negotiable - we don't need all details in stories as we can change implementation
                                    during the development process.
                                </li>
                                <li>Valuable - all stories have clear value for the business. (NOT a stories:
                                    Refactoring,
                                    architecture, cleanup)
                                </li>
                                <li>Estimable - concrete enough for estimation.</li>
                                <li>Small - implementable in 1 iteration.</li>
                                <li>Testable - the business should know which tests prove that the story has been
                                    completed.
                                </li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Estimation process</SubSectionTitle>
                        <TextBlock><b>Golden story</b> - the one story that is clean for everyone and could be used for
                            estimation or
                            example how to estimate.</TextBlock>
                        <TextBlock>
                            <ul>
                                <li>Developers should not see estimations of other developers to not copy them (Planning
                                    poker can be used).
                                </li>
                                <li>Merging - keep really small tasks together (to avoid redundant work)</li>
                                <li>Splitting - Split complex stories to smaller (sometimes we need spike story to do
                                    that)
                                </li>
                                <li>Spiking - Create new story that helps us to estimate inestimable stories.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>QA / Acceptance Tests</SubSectionTitle>
                        <TextBlock>In the perfect world Acceptance Tests are written before the feature. Developers can
                            also write Acceptance Tests.</TextBlock>

                        <SubSectionTitle>Demo</SubSectionTitle>
                        <TextBlock>Stakeholders can see results of the sprint.</TextBlock>

                        <SectionTitle>Testing Process</SectionTitle>

                        <SubSectionTitle>Pre-Testing Activities</SubSectionTitle>
                        <TextBlock>
                            Start at the same time developers begin the implementation of their tasks. Using special
                            test case management tools, software testing engineers create test cases for new
                            functionality
                            covering all possible business scenarios. Their goal is to help identify as many defects as
                            possible and speed up feedback when testing.
                        </TextBlock>
                        <TextBlock>
                            Once the test cases are ready, the testing engineers start to implement “to-be-automated”
                            test cases. Software developers can support them in these activities.
                        </TextBlock>

                        <SubSectionTitle>Automated and Manual Test Execution</SubSectionTitle>
                        <TextBlock>Once code is ready for testing, testers deploy it to a Quality Assurance (QA)
                            environment.
                            Immediately after that, they execute automated tests to ensure the functionality is not
                            broken and is suitable for further manual QA checks.
                        </TextBlock>

                        <TextBlock>
                            If the results of the automated tests are positive, manual QA engineers perform two types of
                            functional testing: using previously written test cases and exploratory testing.
                        </TextBlock>

                        <TextBlock>
                            After that, QA engineers conduct non-functional testing that verifies specific aspects of
                            the system, including performance, security, and usability.
                        </TextBlock>

                        <SubSectionTitle>Defect Management</SubSectionTitle>
                        <TextBlock>
                            QA engineers can identify defects by analyzing the results of both automated and manual
                            testing.
                            They submit the defects into the defect management system so that the developers can fix
                            them, ideally during the same iteration. It is also important that QA engineers cover those
                            defects with automated tests to prevent their re-appearance.

                            Once developers fix the defects, QA engineers verify the results.
                        </TextBlock>


                        <SubSectionTitle>Types of possible environment for Agile SDLC</SubSectionTitle>
                        <TopicRowImg src={imgServers} alt={`Servers`}/>

                        <TextBlock>
                            <ul>
                                <li>
                                    Production Server - live environment for the solution.
                                </li>
                                <li>
                                    UAT / Staging - Pre-Production &mdash; environment with the same configuration and resources as production.
                                </li>
                                <li>
                                    Test - Development branch of repository. (When Master is branch for pre-prod and prod with release version).
                                </li>
                                <li>
                                    Nightly - If Test is not build automatically when dev merged, than nightly can be built at night.
                                </li>
                                <li>
                                    PullRequest / feature - Usually it is a docker container within portainer. When PR created - container with this branch deployed.
                                </li>
                                <li>
                                    Dev - development server, local environment for development. Each developer has own dev environment.
                                </li>
                            </ul>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Agile;
