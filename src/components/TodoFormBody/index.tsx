import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

interface Props { }
interface State {
    editorState: EditorState
}

export default class TodoFormBody extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }

    handleChange(e: EditorState) {
        this.setState({ editorState: e });
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}