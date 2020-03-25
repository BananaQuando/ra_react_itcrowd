import React, { Component } from 'react';
import { ITodo } from '../../stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

interface Props {
    todoItem: ITodo,
}

@observer
export default class TodoFormHeader extends Component<Props> {

    @observable todoItem = {} as ITodo;

    @action changeInputs(evt: { target: { name: string, value: string } }) {
        const { name, value } = evt.target;

        this.todoValues[name] = value;
    }

    @observable componentDidMount(){

        const { todoItem } = this.props;

        this.todoValues = todoItem;
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
                                name="todoTitle"
                                value={this.todoValues.title}
                                onChange={e => this.changeInputs(e)}
                            />
                            <div className="page-title-subheading">
                                <input
                                    className="field__inherit"
                                    type="text"
                                    name="tododescription"
                                    value={this.todoValues.description}
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