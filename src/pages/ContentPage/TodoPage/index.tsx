import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoList from '../../../components/TodoList';
import TodoForm from '../../../components/TodoForm';

export default class TodoPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route name="Todo list" path="/todo-list" exact component={TodoList} />
                <Route name="Create todo" path="/todo-list/create-todo" exact component={TodoForm} />
                <Route name="Todo" path="/todo-list/:todoId" exact component={TodoForm} />
            </Switch>
        );
    }
}