import React from 'react';
import './TextBlock.css';

export default class TextBlock extends React.Component {
  render() {
    return (
      <>
        <p className={`article-text`}>
          {this.props.children}
        </p>
      </>
    );
  }
}
