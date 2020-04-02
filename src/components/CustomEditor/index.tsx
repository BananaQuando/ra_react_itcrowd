import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { IInputDataStore, IInputDataItem } from '../../stores/InputDataStore/interface';

interface Props {
    editorID: string | number,
    content?: string,
    inputDataStore?: IInputDataStore,
    inputDataItem?: IInputDataItem,
}

@inject('inputDataStore', 'todoStore')
@observer
export default class CustomEditor extends React.Component<Props> {

    @observable editorState = EditorState.createEmpty();
    @observable inputDataItem = {} as IInputDataItem
    @observable editorHtmlContent = this.props.content;

    editorStyle = {
        border: "none",
        padding: "10px",
        minHeight: "300px"
    }

    @action onEditorStateChange = (_editorState: any) => {
        this.editorState = _editorState;
        this.inputDataItem.inputContent = this.convertToHtml(_editorState);
        this.editorHtmlContent = this.convertToHtml(_editorState)
    };

    @action async componentDidMount() {

        const { editorID } = this.props;

        this.inputDataItem = await this.props.inputDataStore!.getInputDataStore(editorID, this.editorHtmlContent);

        this.editorState = this.convertToState(this.inputDataItem.inputContent);
    }

    @action convertToHtml(state: any) {

        const rawContentState = convertToRaw(state.getCurrentContent());

        return draftToHtml(rawContentState);
    }

    @action convertToState(content: any) {

        const contentBlock = htmlToDraft(content);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

        return EditorState.createWithContent(contentState);
    }

    render() {
        return (
            <Editor
                editorState={this.editorState}
                placeholder="Entry your text here..."
                onEditorStateChange={this.onEditorStateChange}
                editorStyle={this.editorStyle}
            />
        );
    }

} 