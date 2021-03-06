import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../Pages/Main/Main';
import './Layout.css';
import logo from './Img/blog-tree_700x400.png';

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
          </Switch>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default Layout;
