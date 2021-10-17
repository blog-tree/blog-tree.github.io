import React from 'react';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
        <div className="main-component">
          <section
            className={`section align-item-center`}
          >
            <div className="container">
              <div className="row align-item-center">
                <div className="col-12 col-md-6">
                  <h2>Test</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Main;
