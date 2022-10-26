import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";

const Mentor = () => {
    return (
        <>
            <section
                className={`section article`}
            >
                <Container>
                    <Row>
                        <Col xs lg="5" className="text-muted">
                            IT Mentoring best practices.
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <MainTitle>Mentor in IT</MainTitle>

                    <TextBlock>A mentor helps to grow professionally, to act independently and to cope with
                        challenges.</TextBlock>

                    <SubSectionTitle>4 principles of mentoring</SubSectionTitle>

                    <TextBlock>
                        <ol>
                            <li>Task definition. <span className={`text-muted`}>Mentor will help the mentee to make
                                sense of the work or study process and to set goals and objectives.</span></li>
                            <li>Training and feedback. <span className={`text-muted`}>The mentor helps the mentee to
                                learn by doing. He tells and shows how to do it, and then observes and gives
                                feedback.</span></li>
                            <li>Solving complexities and motivating. <span className={`text-muted`}>A mentor is usually
                                needed where the mentee enters the field of the unknown and encounters difficulties.
                                The mentor is usually needed where the mentee enters an area of unknowns, encounters
                                difficulties, makes mistakes, doubts his or her abilities or becomes involved in a work
                                conflict.</span></li>
                            <li>Evaluation. <span className={`text-muted`}>The mentor assesses the mentee. The mentor
                                himself is also evaluated on the extent to which he has solved all of the mentee's
                                problems and how he has motivated him.</span></li>
                        </ol>
                    </TextBlock>

                    <SubSectionTitle>Skills required for a mentor</SubSectionTitle>

                    <TextBlock>
                        <ul>
                            <li>Green communication and feedback. <span className={`text-muted`}>The mentor communicates
                                a lot with the mentee, observes how the mentee performs tasks and gives regular
                                feedback. Therefore it is important for the mentor to be able to communicate effectively
                                and accurately so that the mentee understands and does not get upset even if things
                                don't work out.</span></li>
                            <li>Motivation. <span className={`text-muted`}> The mentor is expected to support the
                                mentee. This is why it is important for the mentor to be able to recognise the signs
                                of demotivation, find its causes and help deal with it.</span></li>
                            <li>Conflict resolution.</li>
                        </ul>
                    </TextBlock>

                    <SectionTitle>Feedback</SectionTitle>

                    <TextBlock>The most important task of feedback is to correct the mentee's behaviour.</TextBlock>
                    <TextBlock>Good feedback helps to draw clear conclusions: what was done right or wrong, what was
                        the result of the action and how to behave in the future.</TextBlock>
                    <TextBlock>Feedback can't be replaced with instruction. We can't say: I want you to do this, we have
                        to explain the reason and convince the mentee that it is necessary for him or her
                        to do so.</TextBlock>

                    <SubSectionTitle>The structure of feedback</SubSectionTitle>

                    <TextBlock>
                        <ul>
                            <li><b>action</b> <span className={`text-muted`}>what the person did in a particular situation</span> &rarr;</li>
                            <li><b>result</b> <span className={`text-muted`}> what his actions have led to</span> &rarr;</li>
                            <li><b>impact</b> <span className={`text-muted`}>it has had an impact to others</span> &rarr;</li>
                            <li><b>agreement</b> <span className={`text-muted`}>how he should behave in the future</span></li>
                        </ul>
                    </TextBlock>

                    <SubSectionTitle>Content of feedback</SubSectionTitle>
                    <TextBlock>
                        For feedback to be effective, it must contain arguments. It should explain cause-effect
                        relationships, if they are not obvious. It should also describe how the action has affected
                        the person giving the feedback, other people and the outcome.
                        When describing the consequences, you can touch on emotions: if the action made someone feel
                        bad, this is also an argument.
                    </TextBlock>
                    <TextBlock>By using a question instead of a statement, you can open a dialogue and find a better
                        solution. At the same time it shows the person that you are on the same side as them.</TextBlock>

                    <SubSectionTitle>Feedback Principles</SubSectionTitle>

                    <TextBlock>
                        <ul>
                            <li>Approach feedback individually. <span className={`text-muted`}>For one, it is important
                                to hear a detailed explanation of what has gone wrong and how to fix it. For another,
                                diving into the finer details will seem like idle chitchat. Some people find it easy to
                                accept critical feedback in any form, but those who respond emotionally will find the
                                choice of words important.</span></li>
                            <li>Talk about actions, not qualities of the person. <span className={`text-muted`}>If you
                                start commenting on a person's qualities in feedback, this can hurt them personally and
                                cause strong emotions. As a result, you will encounter more resistance and it will be
                                harder to achieve change. Conversely, talking about actions and specific behaviour is
                                less emotionally charged and this feedback is easier for the person to accept.</span></li>
                            <li>Avoid assumptions. <span className={`text-muted`}>Assuming possible motives for
                                someone's actions and explaining them in your own way is easy to get wrong. The person
                                to whom you are giving feedback may want to correct you, and the focus of the
                                conversation will shift to secondary details.</span></li>
                            <li>Give corrective feedback in private.</li>
                            <li>Give feedback immediately.</li>
                            <li>Maintain a balance of praise and reprimands. <span className={`text-muted`}>If it is
                                necessary to give negative feedback, it is essential to monitor how the person is
                                behaving and to praise them for starting to do well.</span></li>
                        </ul>
                    </TextBlock>

                    <SubSectionTitle>Toxic feedback</SubSectionTitle>

                    <TextBlock>Feedback on emotions, showing things in a negative light.</TextBlock>

                    <TextBlock>Toxic feedback violates the principles of respectful communication and has specific
                        objectives.</TextBlock>

                    <TextBlock>
                        <b>Types/Kinds of toxic feedback</b>
                        <ul>
                            <li>Active aggression. <span className={`text-muted`}>Is an attempt to insult, belittle or
                                verbally attack a person or the result of their work. The aggressor is clearly making it
                                clear that he or she is ready for open conflict.</span></li>
                            <li>Passive aggression. <span className={`text-muted`}>Is a tendency to express hostility
                                indirectly. All the same attempt to insult, devalue and attack, but without overtly
                                confrontational language.</span></li>
                            <li>Comments on a person's qualities, not their actions. <span className={`text-muted`}>You
                                should not be allowed to get personal</span></li>
                            <li>Feedback is always negative. <span className={`text-muted`}>Don't forget to praise your
                                charges.</span></li>
                            <li>Breaking personal boundaries.</li>
                            <li>Transfer of responsibility. <span className={`text-muted`}>Don't blame.</span></li>
                        </ul>
                    </TextBlock>

                    <SubSectionTitle>How to solve issues in feedback?</SubSectionTitle>

                    <TextBlock>
                        <ul>
                            <li>Reason searching. <br/> <span className={`text-muted`}>
                                Possible problems:
                                <ul>
                                    <li>Communication. Conflicting or inaccurate signals.</li>
                                    <li>Motivation. Insufficient salary, bad relations in team, family reasons, etc.</li>
                                    <li>Skills. Lack of experience/knowledge.</li>
                                    <li>Organisation. Blocked by others, requirements changing during the sprint, etc.</li>
                                    <li>Culture. Unhealthy team atmosphere.</li>
                                </ul>
                            </span></li>
                            <li>Involve observer / mediator.  <span className={`text-muted`}>A more experienced outsider
                                will be able to spot the problem much more quickly.</span></li>
                            <li>Accept or Break up.  <span className={`text-muted`}>Accept that this person will not
                                change their behaviour on this topic, or not accept it and send them to another team or
                                break up altogether.</span></li>
                        </ul>
                    </TextBlock>

                    <SectionTitle>Conflicts solving</SectionTitle>

                    <TextBlock>People cannot agree all the time. Contradictions arise between them - in views, interests
                        or values.</TextBlock>
                    <TextBlock>Any conflict has a useful function: it helps to detect a problem and find a better
                        solution.</TextBlock>

                    <SubSectionTitle>Conflict Reasons</SubSectionTitle>

                    <TextBlock>
                        <ul>
                            <li>Misunderstanding. <span className={`text-muted`}>Establish team rules for
                                communication (develop a template for setting objectives and agree to specify details
                                straight away).</span></li>
                            <li>Affected interest. <span className={`text-muted`}>The rule of consultative
                                decision-making: if a decision affects the interests of a colleague, it is important to
                                warn him or her about it, to give the opportunity to voice the pros and cons and to
                                propose an alternative.</span></li>
                            <li>Different options for solving problems. <span className={`text-muted`}>A well-organised
                                recruitment system. If the candidate is introduced to the corporate culture, values and
                                priorities of the team in advance, he or she will have the opportunity to weigh up and
                                decide whether he or she is ready to join and accept the rules of the game.</span></li>
                            <li>Organisation of work processes.  <span className={`text-muted`}>For example the poorly
                                organised booking of the meeting room.</span></li>
                            <li>Toxic culture.</li>
                        </ul>
                    </TextBlock>

                    <SubSectionTitle>Preparation for conflict-solving conversation</SubSectionTitle>
                    <TextBlock>
                        <ul>
                            <li>Main goal. <span className={`text-muted`}>Search for something main and positive
                                that will bind together everyone who involved into the conflict.</span></li>
                            <li>Position and arguments. <span className={`text-muted`}>Politely ask to take into account
                            your arguments. And tell your arguments to others.</span></li>
                            <li>Emotions. <span className={`text-muted`}>Explain your emotions with I: I fill something
                                negative, instead of You made me fill something negative.</span></li>
                        </ul>
                    </TextBlock>

                    <TextBlock>
                        <b>Mediator in conflict</b>
                        <ul>
                            <li>Offer help. <span className={`text-muted`}>It is important to know that everyone
                            involved into this conflict accept your role as a mediator.</span></li>
                            <li>Information gathering. <span className={`text-muted`}>Everyone should be heard.</span></li>
                            <li>Meeting. <span className={`text-muted`}>
                                <ol>
                                    <li>Meeting goal.</li>
                                    <li>Help the parties to articulate the essence of the conflict and outline their
                                        common interest.</li>
                                    <li>Discuss the positions of the parties.</li>
                                    <li>Get common solution.</li>
                                    <li>Record the arrangements.</li>
                                    <li>Monitoring plan.</li>
                                </ol>
                            </span></li>
                        </ul>
                    </TextBlock>
                </Container>
            </section>
        </>
    );
}

export default Mentor;
