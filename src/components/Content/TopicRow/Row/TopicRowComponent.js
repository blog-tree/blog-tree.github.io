import React from 'react';
import './TopicRowComponent.css';
import WantToRead from "../../../Tools/WantToRead/WantToRead";

export default class TopicRowComponent extends React.Component {
  render() {
    return (
      <>
        <div className={`topic-row`}>
          <div className={`kids`}>
            {this.props.children}
          </div>
          <WantToRead></WantToRead>
        </div>
        <hr className={`text-muted`} />
      </>
    );
  }
}
