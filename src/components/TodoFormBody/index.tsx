import React, { Component } from 'react';
// import Draft, {
//     htmlToDraft,
//     draftToHtml,
//     EmptyState,
//     rawToDraft,
//     draftToRaw,
//     draftStateToHTML
// } from 'react-wysiwyg-typescript';
import { ITodo, ITodoStore } from 'stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';


import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


interface Props {
    todoStore?: ITodoStore,
    todoID?: string
}
interface State {
    editorState: any
}

@inject("todoStore")
@observer
export default class TodoFormBody extends Component<Props, State> {

    @observable todoItem = {} as ITodo;
    editorStyle = {
        border: "none",
        padding: "10px 0 0"
    }
    state = {
        editorState: EditorState.createEmpty(),
    }
    // constructor(props: Props) {
    //     super(props);

    //     this.state = {
    //         editorState: htmlToDraft('')
    //     }
    // }

    async componentDidMount() {
        // if (this.props.todoID) {
        //     this.todoItem = await this.props.todoStore?.getUserTodo(this.props.todoID);

        //     this.setState({
        //         editorState: htmlToDraft(this.todoItem.text)
        //     });
        // }

    }

    @action onEditorStateChange(editorState: any) {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <div className="main-card mb-3 card">
                <div className="card-body">
                    <Editor
                        editorState={this.state.editorState}
                        // placeholder="Entry your text here..."
                        // editorStyle={this.editorStyle}
                        onEditorStateChange={(editorState) => { this.onEditorStateChange(editorState)} }
                        // stripPastedStyles={false}
                    />
                </div>
            </div>
        );
    }
}