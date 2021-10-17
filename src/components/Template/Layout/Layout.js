import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../Pages/Main/Main';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout;
