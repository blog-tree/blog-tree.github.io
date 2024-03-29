import React from 'react';
import './Sdlc.css';
import imgWaterfall from './Img/waterfall.jpg';
import {Row, Col, Container} from "react-bootstrap";
import TopicRowImg from "../../../Content/TopicRow/Img/TopicRowImg";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";
import imgServers from "./Img/Servers.jpg";

class Sdlc extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Software development life cycle frameworks
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>SDLC</MainTitle>

                        <TextBlock>
                            <b>Software Development Life Cycle (SDLC)</b> — the phases a project undergoes end-to-end —
                            to manage resources, control costs, anticipate possible risks, and track the progress of
                            each process required to develop a high-quality product.
                            Two of the most common are <i>Waterfall</i> and a <i>Scrum-based Agile</i> SDLC.
                        </TextBlock>

                        <TextBlock>Software development plan always has frozen date and has requirements which are
                            continuously changing.</TextBlock>

                        <SubSectionTitle>Phases of SDLC</SubSectionTitle>
                        <TextBlock>
                            <ul>
                                <li>Requirements.<br/> <span className={`text-muted`}>Definition of resources, requirements and expectations of the project.</span>
                                </li>
                                <li>Design.<br/> <span className={`text-muted`}>Design of the system. Elements, components, security level, modules, architecture, various interfaces, and data types.</span>
                                </li>
                                <li>Software Development.<br/> <span className={`text-muted`}>Implementation in a real product.</span>
                                </li>
                                <li>Testing.<br/> <span className={`text-muted`}>Ensuring that the system works as expected.</span>
                                </li>
                                <li>UAT/Staging (User Acceptance Testing).<br/> <span className={`text-muted`}>The business is testing.</span>
                                </li>
                                <li>Maintenance.<br/> <span className={`text-muted`}>Support for production.</span></li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Types of possible environments.</SubSectionTitle>
                        <TopicRowImg src={imgServers} alt={`Servers`}/>

                        <TextBlock>
                            <ul>
                                <li>
                                    Production Server.<br/> <span className={`text-muted`}>Live environment for the solution.</span>
                                </li>
                                <li>
                                    UAT (User Acceptance Testing) / Staging - Pre-Production.<br/> <span
                                    className={`text-muted`}>Environment with the same configuration and resources as production.</span>
                                </li>
                                <li>
                                    Test.<br/> <span className={`text-muted`}>Development branch of repository. (When Master is branch for pre-prod and prod with release version).</span>
                                </li>
                                <li>
                                    Nightly.<br/> <span className={`text-muted`}>If Test is not build automatically when dev merged, than nightly can be built at night.</span>
                                </li>
                                <li>
                                    PullRequest / Feature.<br/> <span className={`text-muted`}>Usually it is a docker container within portainer. When PR created - container with this branch deployed.</span>
                                </li>
                                <li>
                                    Dev.<br/> <span className={`text-muted`}>development server, local environment for development. Each developer has own dev environment.</span>
                                </li>
                            </ul>
                        </TextBlock>

                        <SectionTitle>SDLC frameworks</SectionTitle>

                        <SubSectionTitle>Waterfall</SubSectionTitle>

                        <Row>
                            <Col>
                                <TextBlock>
                                    Winston Royce inspired development to use Waterfall in 1970.
                                    Waterfall because his diagram looked like water flowing down rocks.
                                    Even though it was not what he was recommending.
                                </TextBlock>

                                <TextBlock>
                                    Steps of the Waterfall project:
                                    <ol>
                                        <li>The Meeting.<br/>
                                            <span
                                                className={`text-muted`}>When someone decided to create something (once)</span>
                                        </li>
                                        <li>The Analysis Phase.<br/>
                                            <span className={`text-muted`}>Limited time for analyse, we were supposed to be done
                                        by date, so we are done.</span></li>
                                        <li>The Design Phase.<br/>
                                            <span className={`text-muted`}>How many modules, how many teams, etc.</span>
                                        </li>
                                        <li>The Implementation Phase.<br/>
                                            <span className={`text-muted`}>From coding to production.</span></li>
                                    </ol>
                                </TextBlock>

                                <TextBlock>
                                    Waterfall Problems
                                    <ol>
                                        <li>Late Delivery.<br/> <span className={`text-muted`}>Business can't see results until of the end of the development.</span>
                                        </li>
                                        <li>Frozen requirements.<br/> <span className={`text-muted`}>Everything is documented and can't be changed.</span>
                                        </li>
                                    </ol>
                                </TextBlock>

                                <TextBlock>
                                    Despite its drawbacks, there are times when a waterfall approach may still be the
                                    preferred
                                    approach, including when:
                                    <ul>
                                        <li>The project/requirements/customer demand is not prone to change</li>
                                        <li>The project is small in scope</li>
                                        <li>The speed of delivery is not a priority</li>
                                    </ul>
                                </TextBlock>

                            </Col>
                            <Col>
                                <TopicRowImg src={imgWaterfall} alt={`Waterfall`}/>
                            </Col>
                        </Row>

                        <SubSectionTitle>Spiral Model</SubSectionTitle>
                        <TextBlock>
                            It is mix of waterfall and iterative approaches.
                            Planning - defining. Risk Analysis - mitigate risks. Engineering - coding/testing/deploying.
                            Evaluation - review + plan next iteration.
                        </TextBlock>

                        <SubSectionTitle>Rational Unified Process (RUP)</SubSectionTitle>
                        <TextBlock>
                            <b>RUP</b> is a software development process framework. Artifacts, processes, templates,
                            phases,
                            disciplines.<br/>
                            <b>4 phases:</b> Inception, Elaboration, Construction, Transition. Each phase is 1 or more
                            waterfall iterations.
                        </TextBlock>
                        <TextBlock>
                            About RUP:
                            <ul>
                                <li>Too customizable and heavy. Has plugins and technologies to learn.</li>
                                <li>Prescriptive.</li>
                                <li>Doesn't have TDD (Test-Driven Development) in best practices.</li>
                            </ul>
                        </TextBlock>
                        <TextBlock>
                            Takeaways
                            <ul>
                                <li>Develop iteratively</li>
                                <li>Manage and change requirements</li>
                                <li>Continuously verify quality</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Dynamic System Development Method</SubSectionTitle>
                        <TextBlock>
                            DSDM Life Cycle
                            <ol>
                                <li>Pre-project.<br/>
                                    <span className={`text-muted`}>Analysis, feasibility, business case.</span></li>
                                <li>Project.<br/>
                                    <span className={`text-muted`}>Iterative development, timeboxing.</span></li>
                                <li>Post-project.<br/>
                                    <span className={`text-muted`}>Retrospective, Demo.</span></li>
                            </ol>
                        </TextBlock>
                        <TextBlock>
                            Takeaways
                            <ul>
                                <li>Timeboxing.<br/>
                                    <span className={`text-muted`}>Each activity assign max timelimit which cannot be extended.</span>
                                </li>
                                <li>MoSCoW prioritization.<br/>
                                    <span className={`text-muted`}>Must, should, could and won't HAVE.</span></li>
                                <li>Iterative and incremental approach.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Feature-Driven Development</SubSectionTitle>
                        <TextBlock>
                            FDD - software is a collection of working features. Based on OOP.
                        </TextBlock>
                        <TextBlock>
                            Takeaways
                            <ul>
                                <li>Features team.</li>
                                <li>Parallel development.</li>
                                <li>Tracking completion status.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Crystal Methods</SubSectionTitle>
                        <TextBlock>
                            It is a family of methodologies. It allows calculate team size by the Criticality and pick
                            method to solve this task.
                        </TextBlock>
                        <TextBlock>
                            Takeaways
                            <ul>
                                <li>People-centric.</li>
                                <li>Frequent delivery.</li>
                                <li>Individual approach to the each project.</li>
                                <li>Automated tests, CI.</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Scrum</SubSectionTitle>
                        <TextBlock>
                            Scrum, or SCRUM, is a framework for project management (since 1986).<br/>
                            Main Scrum document: <a
                            href={`https://scrumguides.org/scrum-guide.html`}>https://scrumguides.org/scrum-guide.html</a>
                        </TextBlock>

                        <TextBlock>
                            SCRUM designed for teams of ten or fewer members, who break their work into goals that can
                            be completed within time-boxed iterations, called sprints, no longer than one month and
                            most commonly two weeks.
                        </TextBlock>

                        <TextBlock>The scrum team assesses progress in time-boxed daily meetings of 15 minutes or fewer,
                            called daily scrums (a form of stand-up meeting). At the end of the sprint, the team holds
                            two further meetings: the sprint review which demonstrates the work done to stakeholders to
                            elicit feedback, and sprint retrospective which enables the team to reflect and
                            improve.</TextBlock>

                        <TextBlock>A Scrum Master play the role of an Agile coach and facilitates removal of impediments
                            in the path of the development team. Even though the Scrum Master has management
                            responsibilities, they do not have administrative responsibilities over what the
                            team does.</TextBlock>

                        <TextBlock>
                            Three Pillars of Scrum
                            <ul>
                                <li>Transparency.<br/> <span className={`text-muted`}> All team members involved to all processes and activities required for a project.</span>
                                </li>
                                <li>Inspection.<br/> <span className={`text-muted`}> Review product and its quality with team and customer throughout the project.</span>
                                </li>
                                <li>Adaptation.<br/> <span className={`text-muted`}> Be always flexible.</span></li>
                            </ul>
                        </TextBlock>

                        <TextBlock>
                            Roles
                            <ul>
                                <li>Product owner. <br/> <span className={`text-muted`}>Own product backlog - what's need to be build and in what order.</span>
                                </li>
                                <li>Scrum master.<br/> <span className={`text-muted`}>Practices, rules, events, remove barriers.</span>
                                </li>
                                <li>Development team.<br/> <span className={`text-muted`}>Everyone in the team (testers, devs, documenters, DBAs...).</span>
                                </li>
                            </ul>
                        </TextBlock>

                        <TextBlock>
                            DSM (Daily stand-up meeting / Daily SCRUM). Team sync-up.<br/>
                            Each team member answers to 3QF (3 Question Format):
                            <ul>
                                <li>What did I do since the last dsm?</li>
                                <li>What am I planning/doing today?</li>
                                <li>Impediments?</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Lean</SubSectionTitle>
                        <TextBlock>
                            A collection of principles which was created to minimize waste of money. Visualisation of
                            process to reduce it's cost.
                            <span className={`text-muted`}>Wasting time is None-value work; No gold planning; unnecessary process;</span>
                        </TextBlock>

                        <TextBlock>
                            <b>Value Stream Map</b>
                            <ul>
                                <li>Identify areas of improvement.</li>
                                <li>Identify info flow, material flow, and time ladder.</li>
                            </ul>
                        </TextBlock>
                        <TextBlock>
                            <b>Value Stream Mapping</b>
                            <ul>
                                <li>Lead Time.<br /> <span
                                    className={`text-muted`}>Total time from request to delivery.</span></li>
                                <li>Cycle Time.<br /> <span className={`text-muted`}>Where some work is performed on the product. (backend)</span>
                                </li>
                            </ul>
                        </TextBlock>

                        <TextBlock>
                            Lean Principles
                            <ul>
                                <li>Learning</li>
                                <li>Decide as late as possible</li>
                                <li>Deliver as fast as possible</li>
                                <li>Empower the team</li>
                                <li>See the whole. (Big picture)</li>
                            </ul>
                        </TextBlock>

                        <SubSectionTitle>Kandban</SubSectionTitle>
                        <TextBlock>Kanban is based on the Lean Principles. It has core values: <b>Visualise your
                            work</b> and <b>Limit work in progress</b>.</TextBlock>
                        <TextBlock>Kanban has its Kanban-board, with tasks stored according to Little's Law: Don't take
                            more than team can do.</TextBlock>

                        <SubSectionTitle>XP &mdash; Extreme Programming</SubSectionTitle>
                        <TextBlock>It is collection of best practices for development. For example TDD or Pair
                            programming.</TextBlock>

                        <SubSectionTitle>Water Scrum Fall Paradigm</SubSectionTitle>

                        <TextBlock>
                            <ul>
                                <li><b>Water.</b> <span
                                    className={`text-muted`}>Busyness plan, budgeting, design, requirements, estimation.</span></li>
                                <li><b>SCRUM.</b> <span
                                    className={`text-muted`}>Small SCRUM teams doing development.</span></li>
                                <li><b>Fall.</b> <span
                                    className={`text-muted`}>Integration testing release.</span></li>
                            </ul>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Sdlc;
