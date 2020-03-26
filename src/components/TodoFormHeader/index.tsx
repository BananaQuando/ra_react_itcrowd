import React, { Component } from 'react';
import { ITodoValues, ITodoStore } from '../../stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

interface Props {
    todoStore?: ITodoStore,
    todoID?: string
}

@inject("todoStore")
@observer
export default class TodoFormHeader extends Component<Props> {

    @observable todoItem = {
        title: "Default value",
        description: "Default value",
    } as ITodoValues;

    @action changeInputs(evt: any) {
        const { name, value } = evt.target;

        this.todoItem[name] = value;
    }

    async componentDidMount() {
        if (this.props.todoID) {
            this.todoItem = await this.props.todoStore?.getUserTodo(this.props.todoID);
        }
    }

    render() {

        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="pe-7s-box2 icon-gradient bg-plum-plate">
                            </i>
                        </div>
                        <div>
                            <input
                                className="field__inherit"
                                type="text"
                                name="title"
                                value={this.todoItem.title}
                                onChange={e => this.changeInputs(e)}
                            />
                            <div className="page-title-subheading">
                                <input
                                    className="field__inherit"
                                    type="text"
                                    name="description"
                                    value={this.todoItem.description}
                                    onChange={e => this.changeInputs(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}