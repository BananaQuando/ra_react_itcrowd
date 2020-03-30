import React, { Component } from 'react';
import { ITodo, ITodoStore, ITodoValues } from 'stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import CustomEditor from '../CustomEditor';


interface Props {
    todoStore?: ITodoStore, 
    todoItem: ITodoValues
}

@inject("todoStore")
@observer
export default class TodoFormBody extends Component<Props> {

    render() {
        return (
            <div className="main-card mb-3 card">
                <div className="card-body">
                    {
                        this.props.todoItem.id 
                        ? <CustomEditor content={this.props.todoItem.text} editorID={this.props.todoItem.id} />
                        : <div className="alert alert-danger mb-2">Error can't create id</div>
                    }
                </div>
            </div>
        );
    }
}