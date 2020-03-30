import React, { Component } from 'react';
import { ITodoValues, ITodoStore } from '../../stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

interface Props {
    todoStore?: ITodoStore,
    todoItem: ITodoValues,
}

@inject("todoStore")
@observer
export default class TodoFormHeader extends Component<Props> {

    @action async changeInputs(evt: any) {
        const { name, value } = evt.target;

        this.props.todoItem[name] = value;
    }

    @action async updateTodo(evt: any){
        await this.props.todoStore!.changeTodo(this.props.todoItem.id);
    }

    render() {
        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="pe-7s-box2 icon-gradient bg-plum-plate"></i>
                        </div>
                        <div>
                            <input
                                className="field__inherit"
                                type="text"
                                name="title"
                                value={this.props.todoItem.title}
                                onChange={e => this.changeInputs(e)}
                                onBlur={(e) => this.updateTodo(e)}
                            />
                            <div className="page-title-subheading">
                                <input
                                    className="field__inherit"
                                    type="text"
                                    name="description"
                                    value={this.props.todoItem.description}
                                    onChange={e => this.changeInputs(e)}
                                    onBlur={(e) => this.updateTodo(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        <div className="position-relative">
                            <input name="time_spent" id="timeSpent" placeholder="Spent time on task" type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}