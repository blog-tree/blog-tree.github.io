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

const Layout = () => {
  const [state, setState] = useState({ withMenu: 'no' });

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
          </Switch>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default Layout;
