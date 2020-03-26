import React, { Component } from 'react';
import { ITodo, ITodoStore, ITodoValues } from '../../stores/TodoStore/interfaces';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import TodoFormHeader from '../TodoFormHeader';
import TodoFormBody from '../TodoFormBody';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps {
    todoId: string
}

interface Props extends RouteComponentProps<RouteProps> {}

@observer
export default class TodoForm extends Component<Props> {
    render() {
        const { todoId: todoID } = this.props.match.params;
        return (
            <>
                <TodoFormHeader todoID={todoID} />
                <TodoFormBody todoID={todoID} />
            </>
        );
    }
}