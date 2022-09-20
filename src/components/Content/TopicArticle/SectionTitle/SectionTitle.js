import React from 'react';

export default class SectionTitle extends React.Component {
    render() {
        return (
            <>
                <h3 className={`mt-3 text-left`}>
                    {this.props.children}
                </h3>
            </>
        );
    }
}
