import React from 'react';
import './Zsh.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";

class Zsh extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Z shell instead of default bash or sh
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Z Shell Terminal Plugin</MainTitle>

                        <TextBlock>
                            <ol>
                                <li><code>sudo apt install zsh</code> Install Zsh</li>
                                <li><code>sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</code> Install OhMyZsh</li>
                                <li><code>chsh -s $(which zsh)</code> Set Zsh as a default terminal</li>
                                <li><code></code> <a href={`https://github.com/romkatv/powerlevel10k`}>Powerlevel10k</a></li>
                            </ol>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Zsh;
