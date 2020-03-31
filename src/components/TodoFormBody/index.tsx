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
    @observable todoItem = {} as ITodoValues;
    onChangeHandler = (_content: string) => {
        // this.todoItem.text = _content;
        this.props.todoStore!.changeTodo(this.todoItem.id);
    }

    async componentDidMount(){
        if (this.props.todoItem.id){
            this.todoItem = await this.props.todoStore!.getTodo(this.props.todoItem.id);
        }
    }

    render() {
        return (
            <div className="main-card mb-3 card">
                <div className="card-body">
                    {
                        this.todoItem.id 
                        ? <CustomEditor onChange={this.onChangeHandler} content={this.todoItem.text} editorID={this.todoItem.id} />
                        : <div className="alert alert-danger mb-2">Error can't create id</div>
                    }
                </div>
            </div>
        );
    }
}