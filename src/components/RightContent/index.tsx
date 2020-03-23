import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import TodoList from '../TodoList';

export default class RightContent extends Component {
    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Switch>
                        <Route path="/todo-list" component={TodoList} />
                    </Switch>
                </div>
            </div>
        );
    }
}