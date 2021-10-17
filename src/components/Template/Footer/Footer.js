import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Footer.css';
import {FormattedMessage} from "react-intl";

class Footer extends React.Component {
  
  render() {
    const year = new Date().getFullYear();
    return (
      <Router>
        <footer className="footer">
          <div className="container">
            <div className="line" />
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="block">
                    <h4 className="bolder title"><FormattedMessage
                      id = "content.about"
                      defaultMessage="About"
                    /></h4>
                    <Link to="license"><FormattedMessage
                      id = "content.license"
                      defaultMessage="License"
                    /></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-4 text-muted">
                <div className="col-12">
                  <div className="text-muted mt-2">© { year } zagovorichev.github.io</div>
                </div>
              </div>
          </div>
        </footer>
      </Router>
    );
  }
}

export default Footer;
