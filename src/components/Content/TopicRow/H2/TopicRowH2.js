import React from 'react';
import './TopicRowH2.css';

export default class TopicRowH2 extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.children}</h2>
      </>
    );
  }
}
