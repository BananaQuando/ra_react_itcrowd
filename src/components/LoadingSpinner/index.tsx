import React from 'react';
import './styles.css';

export default class LoadingSpinner extends React.Component{
    render() {
        return (
            <div className="loading-wrapper">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}