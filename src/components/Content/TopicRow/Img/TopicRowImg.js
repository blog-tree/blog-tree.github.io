import React from 'react';
import './TopicRowImg.css';

export default class TopicRowImg extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.src} alt={this.props.alt} className={`topic-row-img`} />
      </>
    );
  }
}
