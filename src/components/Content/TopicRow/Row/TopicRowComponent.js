import React from 'react';
import './TopicRowComponent.css';
import WantToRead from "../../../Tools/WantToRead/WantToRead";

export default class TopicRowComponent extends React.Component {
    goToLink = () => {
        const isLink = !!this.props.link;
        if (isLink) {
            window.open(`/#${this.props.link}`, "_blank")
        }
    };

    render() {

        return (
            <>
                <div className={`topic-row`} onClick={this.goToLink}>
                    <div className={`kids`}>
                        {this.props.children}
                    </div>
                    <WantToRead></WantToRead>
                </div>
                <hr className={`text-muted`}/>
            </>
        );
    }
}
