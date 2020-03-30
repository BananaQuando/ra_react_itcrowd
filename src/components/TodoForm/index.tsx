import React, { Component } from 'react';
import { ITodo, ITodoStore, ITodoValues } from '../../stores/TodoStore/interfaces';
import { inject, observer } from 'mobx-react';
import TodoFormHeader from '../TodoFormHeader';
import TodoFormBody from '../TodoFormBody';
import { RouteComponentProps } from 'react-router-dom';
import { observable, action } from 'mobx';

interface RouteProps {
    todoId: string
}

interface Props{
    todoStore?: ITodoStore,
}

interface Props extends RouteComponentProps<Props & RouteProps> { }

@inject("todoStore")
@observer
export default class TodoForm extends Component<Props> {

    @observable todoItem = {
        title: "Default title",
        description: "Default description",
    } as ITodoValues;

    @action async componentDidMount(){
        const { todoId: todoID } = this.props.match.params;

        if (todoID) {
            this.todoItem = await this.props.todoStore!.getTodo(todoID);
        } else {
            // this.todoItem = await this.props.todoStore!.createTodo();
        }
    }

    render() {
        return (
            <>
                <TodoFormHeader todoItem={this.todoItem} />
                <TodoFormBody todoItem={this.todoItem} />
            </>
        );
    }
}