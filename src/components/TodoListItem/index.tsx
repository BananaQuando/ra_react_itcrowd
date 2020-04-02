import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { ITodo, ITodoStore } from '../../stores/TodoStore/interfaces';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface Props {
    todoStore?: ITodoStore,
    todoID: number,
}

interface State {
    statusClass: string
}

@inject("todoStore")
@observer
export default class TodoListItem extends Component<Props, State> {

    @observable todoItem = {} as ITodo;
    @observable statusClass = 'bg-focus' as string

    async componentDidMount() {
        this.todoItem = await this.props.todoStore!.getTodo(this.props.todoID);

        this.statusClass = this.todoItem.status === 1 ? 'bg-success' : 'bg-focus';
    }

    completeToggle(evt: any) {
        // this.todoItem.status
        let { checked } = evt.target;

        checked == true ? this.todoItem.status = 1 : this.todoItem.status = 2;
        this.statusClass = this.todoItem.status === 1 ? 'bg-success' : 'bg-focus';
        this.props.todoStore?.saveTodo(this.todoItem.id);
    }

    @action async removeTodo() {
        await this.props.todoStore!.removeTodo(this.todoItem.id);
    }

    render() {
        const { id, title, description, status } = this.todoItem;

        return (
            <li className="list-group-item">
                <div className={`todo-indicator ${this.statusClass}`}></div>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                            <div className="custom-checkbox custom-control">
                                <input
                                    type="checkbox"
                                    id={`exampleCustomCheckbox${id}`}
                                    className="custom-control-input"
                                    checked={status === 1 ? true : false}
                                    onChange={(e) => this.completeToggle(e)}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor={`exampleCustomCheckbox${id}`}>&nbsp;</label>
                            </div>
                        </div>
                        <div className="widget-content-left">
                            <div className={`widget-heading`}>
                                <Link to={`/todo-list/${id}`}>
                                    {title}
                                </Link>
                            </div>
                            <div className="widget-subheading">{description}</div>
                        </div>
                        <div className="widget-content-right">
                            <button
                                className="border-0 btn-transition btn btn-outline-danger"
                                onClick={() => this.removeTodo()}>
                                <i className="fa fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li >
        );
    }
}