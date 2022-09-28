import React from 'react';

export default class SectionTitle extends React.Component {
    render() {
        return (
            <>
                <h3 className={`pt-4 pb-2 text-left`}>
                    {this.props.children}
                </h3>
            </>
        );
    }
}
