import React from 'react';
import './WantToRead.css';
import {FormattedMessage} from "react-intl";

export default class WantToRead extends React.Component {

  isNotConfigured = false;

  componentDidMount() {
    if (process.env.REACT_APP_WITH_COUNTER) {
      fetch(process.env.REACT_APP_COUNTER_URL)
        .then(res => console.log(res), (error) => {
          // console.log(error)
        });
    }
  }

  render() {

    function wantsToRead() {
      console.log('send request');
    }

    return (
      <>
        {this.isConfigured && (
          <div className={`want-to-read`}>
            <b onClick={wantsToRead}><FormattedMessage
              id = "gui.want_to_read"
              defaultMessage="I want to read it!"
              description={'Want to read gadget'}
            /></b>
          </div>
        ) }
      </>
    );
  }
}
