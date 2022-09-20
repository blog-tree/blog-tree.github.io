import React from 'react';

export default class SubSectionTitle extends React.Component {
    render() {
        return (
            <>
                <h4 className={`mt-3`}>
                    {this.props.children}
                </h4>
            </>
        );
    }
}
