import React, {useEffect, useState} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../Pages/Main/Main';
import './Layout.css';
import logo from './Img/blog-tree_700x400.png';
import Agile from "../../Pages/Articles/Agile/Agile";
import Sdlc from "../../Pages/Articles/Sdlc/Sdlc";
import Dev from "../../Pages/Articles/Development/Dev";
import TDD from "../../Pages/Articles/TDD/TDD";
import Management from "../../Pages/Articles/Management/Management";
import Traefik from "../../Pages/Articles/Traefik/Traefik";
import Zsh from "../../Pages/Articles/Zsh/Zsh";
import ReactGA from 'react-ga4';
import QA from "../../Pages/Articles/QA/QA";
import Freelance from "../../Pages/Freelance/Freelance";
import Mentor from "../../Pages/Articles/Mentor/Mentor";

ReactGA.initialize('G-6VMRK5H09P');

const Layout = () => {
    const [state, setState] = useState({withMenu: 'no'});

    const moveBg = (className) => {
        const withMenu = className;
        setState({withMenu});
    }

    const scrollHandler = () => {
        if (window.scrollY <= 30) {
            moveBg('no');
        } else {
            moveBg('with-menu');
        }
    }

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    });

    return (
        <>
            <Router>
                <div className={`top-bg ${state.withMenu}`}>
                    <img src={logo} alt="Blog-Tree Logo"/>
                </div>
                <div className={`main-container`}>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/article/agile" component={Agile}/>
                        <Route exact path="/article/sdlc" component={Sdlc}/>
                        <Route exact path="/article/dev" component={Dev}/>
                        <Route exact path="/article/tdd" component={TDD}/>
                        <Route exact path="/article/management" component={Management}/>
                        <Route exact path="/article/traefik" component={Traefik}/>
                        <Route exact path="/article/zsh" component={Zsh}/>
                        <Route exact path="/article/qa" component={QA}/>
                        <Route exact path="/article/freelance" component={Freelance}/>
                        <Route exact path="/article/mentor" component={Mentor}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </>
    );
}

export default Layout;
