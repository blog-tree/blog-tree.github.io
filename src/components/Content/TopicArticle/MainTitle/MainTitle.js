import React from 'react';

export default class MainTitle extends React.Component {
    render() {
        return (
            <>
                <h1 className={`mb-3`}>
                    {this.props.children}
                </h1>
            </>
        );
    }
}
