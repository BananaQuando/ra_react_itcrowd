import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
import TodoStore from '../../stores/TodoStore';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {
    todoStore: TodoStore,
}

@inject("todoStore")
@observer
export default class TodoList extends Component<Props> {

    @observable todoIdList = [] as number[];

    async componentDidMount() {
        await this.props.todoStore.getAllTodos();
        const { todoList } = this.props.todoStore;

        for (const id in todoList) {
            if (todoList.hasOwnProperty(id)) {
                const todo = todoList[id];

                this.todoIdList.push(todo.id);
            }
        }
    }

    render() {
        const listItems = this.todoIdList.map((id) => (
            <TodoListItem key={id} todoId={id} />
        ));

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
                                    <ul className="todo-list-wrapper list-group list-group-flush">
                                        {listItems}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-block text-right card-footer">
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}