import React from 'react';
import './Traefik.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SubSectionTitle from "../../../Content/TopicArticle/SectionTitle/SubSectionTitle";

class Traefik extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Traefik to Dockerize local development
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Docker containers with Traefik</MainTitle>

                        <TextBlock>When developing more than one monolithic project, there is a problem with the use
                            of ports. For example 80 port for application1 cannot be used for application2,
                            so you have to forward the ports to http://application1.loc:80 http://application2.loc:81
                            and for https it gets even more complicated. How to design an environment to
                            support http://application1.loc, http://application2.loc
                            and https://application1/2.loc?</TextBlock>

                        <SectionTitle>Dockerizer</SectionTitle>

                        <TextBlock>
                            <a href={`https://github.com/zagovorichev/dockerizer`}>https://github.com/zagovorichev/dockerizer</a>
                        </TextBlock>

                        <TextBlock>Dockerizer it is an example of how traefik can be configured. Plus it has WhoAmI
                            service to see network info and Portainer - to see all docker containers/volumes,
                            etc.</TextBlock>

                        <SubSectionTitle>How to install Dockerizer</SubSectionTitle>

                        <TextBlock>
                            <code>
                                git clone https://github.com/zagovorichev/dockerizer.git <br/>
                                docker network create traefik-public <br/>
                                docker-compose up -d
                            </code> <br/>
                            And check that <a href={`http://whoami.docker.localhost`}>WhoAmI</a> works.
                        </TextBlock>

                        <SubSectionTitle>Secure protocol HTTPS from the box</SubSectionTitle>

                        <TextBlock>
                            <blockquote className={`blockquote text-muted`}>If you want to do it for Windows with WSL2 then there are
                            some extra steps marked with ⊞. If not - just skip them.</blockquote>

                            <ul>
                                <li>⊞ Install chocolately. <br/>
                                    Powershell command:
                                    <code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))</code>
                                </li>
                                <li>⊞ Install mkcert for Windows from Powershell: <code>choco install mkcert</code></li>
                                <li>⊞ Find and save path to CertRoot: <code>mkcert -CAROOT</code></li>
                                <li>Install mkcert for Linux: <br/>
                                    <code>sudo apt install libnss3-tools</code> <br/>
                                    <code>curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"</code> <br/>
                                    <code>sudo cp mkcert-v*-linux-amd64 /usr/local/bin/mkcert</code> <br/>
                                    <span className={`text-muted`}>or check preferable for you way to install mkcert:
                                        <a href="https://github.com/FiloSottile/mkcert">https://github.com/FiloSottile/mkcert</a></span>
                                </li>
                                <li>⊞ Copy all root certificates from WSL 2 to Windows</li>
                            </ul>
                        </TextBlock>


                        <SectionTitle>Windows WSL2 + Windows Docker Configuration</SectionTitle>

                        <TextBlock>
                            <ol>
                                <li>GoTo Microsoft Store -> search for Ubuntu 22 LTS -> Install -> Run
                                    <blockquote className={`text-muted`}>
                                        Possible issue: If Windows Subsystem for Linux is not installed.<br/>
                                        Fix: Start -> Settings -> Update & Security -> For developers: Turn Developer
                                        mode to <b>ON</b><br/>
                                        Then restart WSL installation:
                                        <ul>
                                            <li>Windows Key + R</li>
                                            <li>type: optionalfeatures.exe</li>
                                            <li>Check Windows Subsystem for Linux</li>
                                            <li>It will restart windows at the end</li>
                                        </ul>
                                        After that you can open <i>Start -> Ubuntu 22 LTS</i> and that will finish
                                        installation.
                                    </blockquote>
                                    <blockquote>In cmd : <code>wsl -l -v</code> should show v2 or try to do
                                        <code>wsl --set-default-version 2</code></blockquote>
                                    <blockquote>And if you have already installed Linux distributive with WSL v1
                                        <code>wsl --set-version Ubuntu-22.04 2</code></blockquote>
                                </li>
                                <li>(Optional) Check that Windows Terminal installed. Start -> wt.
                                    <blockquote className={`text-muted`}>
                                        If it is not installed<br />
                                        Start -> Store -> Search for Windows Terminal -> install
                                    </blockquote>
                                    <blockquote>In the WT: Ctrl + , -> Default Ubuntu 22</blockquote>
                                </li>
                                <li>GoTo <a href={`https://docker.com`}>docker.com</a> -> Download Docker Desktop
                                <br/>
                                    <span className={`text-muted`}>
                                        After that WSL 2 has docker installed or check
                                    Docker Desktop with WSL 2 instructions: https://docs.docker.com/go/wsl2 <br/>
                                    <code>docker ps</code> if doesn't work: <code>sudo usermod -aG docker YOUR_USERNAME</code>
                                    and restart terminal.</span>
                                </li>
                            </ol>
                        </TextBlock>

                    </Container>
                </section>
            </>
        );
    }
}

export default Traefik;
