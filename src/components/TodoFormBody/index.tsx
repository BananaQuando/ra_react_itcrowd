import React, { Component } from 'react';
import { ITodo, ITodoStore } from 'stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import CustomEditor from '../CustomEditor';


interface Props {
    todoStore?: ITodoStore, 
    todoID?: string
}

@inject("todoStore")
@observer
export default class TodoFormBody extends Component<Props> {

    @observable todoItem = {} as ITodo;

    async componentDidMount() {
        if (this.props.todoID) {
            this.todoItem = await this.props.todoStore?.getUserTodo(this.props.todoID);
        } else {
            this.todoItem = await this.props.todoStore?.createTodo();
        }
    }

    render() {
        return (
            <div className="main-card mb-3 card">
                <div className="card-body">
                    {
                        this.todoItem.id ? <CustomEditor content={this.todoItem.text} editorID={this.todoItem.id} />
                        : <div className="alert alert-danger mb-2">Error can't create id</div>
                    }
                    {
                        (this.props.todoID === undefined)
                            ? <button className="mb-2 btn btn-block btn-gradient-success">Create</button>
                            : ""
                    }
                </div>
            </div>
        );
    }
}