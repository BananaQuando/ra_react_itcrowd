import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Link } from 'react-router-dom';
import { ITodoStore } from 'stores/TodoStore/interfaces';
import { IUserStore } from 'stores/UserStore/interface';

interface Props {
    todoStore?: ITodoStore,
    userStore?: IUserStore
}

@inject("todoStore", "userStore")
@observer
export default class TodoList extends Component<Props> {

    @observable todoIdList = [] as number[];
    @observable userTodosID = [] as number[];

    @action async componentDidMount() {
        //  передавать id пользователей
        this.userTodosID = await this.props.todoStore!.getUserTodosID(
            this.props.userStore!.currentUser.id
        );
    }

    render() {
        const listItems = this.userTodosID ? this.userTodosID.map((id) => {
            return <TodoListItem key={id} todoID={id} />
        }) : '';

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i className="header-icon lnr-database icon-gradient bg-malibu-beach"> </i>
                                Tasks List
                            </div>
                        </div>
                        <div className="scroll-area-lg">
                            <div className="scrollbar-container">
                                <div className="p-2">
                                    {/* Разбиение по группам */}
                                    {/* <div className="todo-list-group">
                                        <div className="todo-list-group__name">
                                            <div className="swatch-holder swatch-holder-sm bg-grow-early"></div>
                                            <strong>In progress</strong>
                                        </div>
                                    </div> */}
                                    <ul className="todo-list-wrapper list-group list-group-flush">
                                        {listItems}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-block text-left card-footer">
                            <Link to="/todo-list/create-todo" className="btn btn-primary">Add Task</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}