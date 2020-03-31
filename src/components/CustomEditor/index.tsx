import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { ICustomEditorStore, ICustomEditorItem } from '../../stores/CustomEditorStore/interfaces';

interface Props {
    editorID: string | number,
    content?: string,
    customEditorStore?: ICustomEditorStore,
    customEditorItem?: ICustomEditorItem,
    onChange?: Function
}

@inject('customEditorStore', 'todoStore')
@observer
export default class CustomEditor extends React.Component<Props> {

    @observable editorState = EditorState.createEmpty();
    @observable customEditorItem = {} as ICustomEditorItem
    @observable editorHtmlContent = this.props.content;
    @observable onChange = this.props.onChange ? this.props.onChange : () => {}

    editorStyle = {
        border: "none",
        padding: "10px",
        minHeight: "300px"
    }

    @action onEditorStateChange = (_editorState: any) => {
        this.editorState = _editorState;
        this.customEditorItem.editorContent = this.convertToHtml(_editorState);
        this.editorHtmlContent = this.convertToHtml(_editorState)
        this.onChange(this.editorHtmlContent)
    };

    @action async componentDidMount() {

        const { editorID } = this.props;

        this.customEditorItem = await this.props.customEditorStore!.getEditor(editorID, this.editorHtmlContent);

        this.editorState = this.convertToState(this.customEditorItem.editorContent);
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