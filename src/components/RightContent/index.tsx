import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { Breadcrumb } from 'react-breadcrumbs';

export default class RightContent extends Component {
    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Switch>
                        <Route path="/todo-list" exact component={TodoList} />
                        <Route path="/todo-list/create-todo" exact component={TodoForm} />
                        <Route path="/todo-list/:todoId" exact component={TodoForm} />
                    </Switch>
                </div>
            </div>
        );
    }
}