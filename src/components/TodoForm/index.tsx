import React, { Component } from 'react';
import { ITodo, ITodoStore, ITodoValues } from '../../stores/TodoStore/interfaces';
import { inject, observer } from 'mobx-react';
import TodoFormHeader from './TodoFormHeader';
import TodoFormBody from './TodoFormBody';
import { RouteComponentProps } from 'react-router-dom';
import { observable, action } from 'mobx';
import { IInputDataStore } from 'stores/InputDataStore/interface';
import { INotificationsStore } from 'stores/NotificationsStore/interface';
import { IUserStore } from 'stores/UserStore/interface';

interface RouteProps {
    todoId: string,
}

interface Props {
    todoStore?: ITodoStore,
    inputDataStore?: IInputDataStore,
    notificationsStore?: INotificationsStore,
    userStore?: IUserStore
}

interface Props extends RouteComponentProps<Props & RouteProps> { }

@inject("todoStore", "inputDataStore", "notificationsStore", "userStore")
@observer
export default class TodoForm extends Component<Props> {

    @observable todoItem = {} as ITodoValues;
    @observable changed = true;

    @action async componentDidMount() {
        const { todoId: todoID } = this.props.match.params;

        if (todoID) {
            this.todoItem = await this.props.todoStore!.getTodo(todoID);
        } else {
            this.todoItem = await this.props.todoStore!.createTodo(this.props.userStore?.currentUser.id);
        }
    }

    @action setChanged = () => {
        this.changed = true;
    }

    getInputValue = async (inputName: string) => {

        const { id } = this.todoItem;

        const data = await this.props.inputDataStore!.getInputDataStore(`todo_${id}_${inputName}`);

        return data.inputContent;
    }

    @action saveForm = async () => {
        this.todoItem.title = await this.getInputValue("title");
        this.todoItem.description = await this.getInputValue("description");
        this.todoItem.text = await this.getInputValue("text");

        await this.props.todoStore?.saveTodo(this.todoItem.id);
        await this.props.notificationsStore!.addNotification({
            id: this.todoItem.id,
            text: `Задача #${this.todoItem.id} успешно сохранена`,
            type: "toast-success",
            duration: 2000
        });
    }

    render() {
        return (
            <>
                {this.todoItem.id ? <TodoFormHeader todoItem={this.todoItem} /> : ''}
                <button
                    className="btn-square btn btn-block btn-success"
                    onClick={this.saveForm}
                >
                    Save
                </button>
                {this.todoItem.id ? <TodoFormBody todoItem={this.todoItem} /> : ''}
            </>
        );
    }
}