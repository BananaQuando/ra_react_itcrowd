import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

export default class RightContent extends Component {
    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Switch>
                        <Route path="/todo-list" exact component={TodoList} />
                        <Route path="/todo-list/:todoId" component={TodoForm} />
                    </Switch>
                </div>
            </div>
        );
    }
}