import React, { Component } from 'react';
import { ITodoValues, ITodoStore } from '../../stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import CustomTextInput from '../CustomTextInput';
import { IInputDataStore } from 'stores/InputDataStore/interface';

interface Props {
    todoStore?: ITodoStore,
    todoItem: ITodoValues,
}

@inject("todoStore")
@observer
export default class TodoFormHeader extends Component<Props> {

    @observable todoItem = {} as ITodoValues;

    async componentDidMount() {
        if (this.props.todoItem.id){
            this.todoItem = await this.props.todoStore?.getTodo(this.props.todoItem.id);
        }
    }

    render() {
        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="pe-7s-box2 icon-gradient bg-plum-plate"></i>
                        </div>
                        <div >
                            <CustomTextInput
                                content={this.props.todoItem.title}
                                inputID={`todo_${this.props.todoItem.id}_title`}
                                name='title'
                            />
                            <div className="page-title-subheading">
                                <CustomTextInput
                                    content={this.props.todoItem.description}
                                    inputID={`todo_${this.props.todoItem.id}_description`}
                                    name='description'
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