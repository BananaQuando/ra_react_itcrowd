import React, { Component, Children } from 'react';

export default class RightContent extends Component {
    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    { this.props.children }
                </div>
            </div>
        );
    }
}