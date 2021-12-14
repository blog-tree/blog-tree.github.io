import React from 'react';
import './TopicRowText.css';

export default class TopicRowText extends React.Component {
  render() {
    return (
      <>
        <div className={`text-muted topic-row-text`}>
          {this.props.children}
        </div>
      </>
    );
  }
}
