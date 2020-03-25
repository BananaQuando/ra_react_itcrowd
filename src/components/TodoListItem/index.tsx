import React, { Component } from 'react';
import { observable } from 'mobx';
import { ITodo, ITodoStore } from '../../stores/TodoStore/interfaces';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface Props {
    todoStore?: ITodoStore,
    todoId: number,
}

interface State {
    statusClass: string
}

@inject("todoStore")
@observer
export default class TodoListItem extends Component<Props, State> {

    @observable todoItem = {} as ITodo;

    constructor(props: Props) {
        super(props);
        this.state = {statusClass: 'bg-focus'};
    }

    async componentDidMount() {
        this.todoItem = await this.props.todoStore!.getUserTodo(this.props.todoId);

        switch (this.todoItem.status) {
            case 1:
                this.setState({
                    statusClass: 'bg-success'
                });
                break;
            case 2:
                this.setState({
                    statusClass: 'bg-focus'
                });
                break;
            default:
                break;
        }
    }

    completeToggle() {
        if (this.state.statusClass != 'bg-success') {
            this.setState({
                statusClass: 'bg-success'
            });
        } else {
            this.setState({
                statusClass: 'bg-focus'
            });
        }
    }

    render() {
        const { id, title, status, create_date } = this.todoItem;

        return (
            <li className="list-group-item">
                <div className={`todo-indicator ${this.state.statusClass}`}></div>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                            <div className="custom-checkbox custom-control">
                                <input
                                    type="checkbox" id={`exampleCustomCheckbox${id}`}
                                    className="custom-control-input" onChange={() => this.completeToggle()} />
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
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}