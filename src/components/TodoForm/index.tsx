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

interface Props extends RouteComponentProps<RouteProps> {
    todoStore?: ITodoStore,
}

@inject("todoStore")
@observer
export default class TodoForm extends Component<Props> {

    @observable todoItem = {} as ITodoValues;

    @observable async componentWillMount() {
        const { todoId: todoID } = this.props.match.params;
        if (todoID) {
            this.todoItem = await this.props.todoStore?.getUserTodo(todoID);
        }
    }
    

    // TODO: Переделать на передеачу id

    render() {
        return (
            <>
                <TodoFormHeader todoItem={this.todoItem} />
                <TodoFormBody />
            </>
        );
    }
}