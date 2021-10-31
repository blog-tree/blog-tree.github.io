import React from 'react';
import './Main.css';
import {Row, Col, Container, Table} from "react-bootstrap";
import github_pages from './Img/GitHubPages.png';
import firebase from './Img/firebase.png';
import jenkins from './Img/jenkins.png';
import traefik from './Img/traefik.png';
import serverless from './Img/serverless.png';
import ansible from './Img/ansible.png';
import awsGlue from './Img/aws_glue.png';

class Main extends React.Component {
  render() {
    return (
      <>
          <section
            className={`section align-item-center`}
          >
            <Container>
              <Row>
                <Col xs lg="5" className="text-muted">
                  Software Developer Log
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Table>
                        <tbody>
                        <tr>
                          <td className={`align-middle`}><h2>Deployment to GitHub pages</h2></td>
                          <td><img src={github_pages} alt={`GitHub Pages`} /></td>
                          <td className={`text-muted align-middle`}>Очень простой способ опубликовать свой сайт бесплатно, без домена и с минимальными усилиями.
                            Рассмотрим на примере ReactJs приложения. Но в целом есть возможность использовать любой
                            фреймворк.</td>
                        </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td className={`text-muted align-middle`}>
                        Так же бесплатно можно развернуть свой сайт у Гугла в Firebase.
                      </td>
                      <td><img src={firebase} alt={`Firebase`} /></td>
                      <td className={`align-middle`}><h2>Deployment to Firebase Google</h2></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td><img src={traefik} alt={`Traefik`} /></td>
                      <td className={`text-muted align-middle`}>
                        Установка и настройка локального Traefik + Portainer для окружения в Docker.
                        Настройка сертификатов HTTPS c MkCert для локальных адресов. + Windows WSL 2
                        с доступами к проектам из Debian или Ubuntu.
                      </td>
                      <td className={`align-middle`}><h2>Traefik...</h2></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td className={`text-muted align-middle`}>
                        Пошаговая инструкция по настройке и установке Jenkins. Настройка разворачивания прокета
                        используя Jenkins-Agent. Полностью рабочее окружение на vagrant, в котором работает
                        Docker для запуска деплоя в нем. Jenkins запускаем на локальном Docker.
                      </td>
                      <td><img src={jenkins} alt={`Jenkins`} /></td>
                      <td className={`align-middle`}><h2>Jenkins Agent</h2></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td><img src={serverless} alt={`Serverless framework`} /></td>
                      <td className={`text-muted align-middle`}>
                        Как использовать Serverless фреймворк для того чтобы развернуть AWS Lambda функции
                        с нестандартным стеком : PHP8 + Bref.
                      </td>
                      <td className={`align-middle`}><h2>Serverless framework</h2></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td><img src={ansible} alt={`Ansible`} /></td>
                      <td className={`align-middle`}><h2>Ansible</h2></td>
                      <td className={`text-muted align-middle`}>
                        Ansible как инструмент для разворачивания проектов.
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table>
                    <tbody>
                    <tr>
                      <td className={`align-middle`}><h2>AWS Glue</h2></td>
                      <td className={`text-muted align-middle`}>
                        Использование AWS Glue для генерации .xml отчетов по BigData.
                      </td>
                      <td><img src={awsGlue} alt={`AWS Glue`} /></td>
                    </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </section>
      </>
    );
  }
}

export default Main;
