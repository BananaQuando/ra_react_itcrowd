import React, { Component } from 'react';
import { ITodo, ITodoStore } from 'stores/TodoStore/interfaces';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
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
        padding: "10px",
        minHeight: "300px"
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    async componentDidMount() {
        if (this.props.todoID) {
            this.todoItem = await this.props.todoStore?.getUserTodo(this.props.todoID);

            this.setState({
                editorState: this.convertToState(this.todoItem.text)
            });
        }
    }

    @action convertToHtml(state: any) {
        const rawContentState = convertToRaw(state.getCurrentContent());

        return draftToHtml(rawContentState);
    }

    @action convertToState(text: string) {
        const contentBlock = htmlToDraft(text);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);

        return editorState;
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
                        placeholder="Entry your text here..."
                        editorStyle={this.editorStyle}
                        onEditorStateChange={(editorState) => { this.onEditorStateChange(editorState) }}
                    // stripPastedStyles={false}
                    />
                    {
                        (this.props.todoID === undefined)
                            ? <button className="mb-2 btn btn-block btn-gradient-success">Create</button>
                            : ''
                    }
                </div>
            </div>
        );
    }
}