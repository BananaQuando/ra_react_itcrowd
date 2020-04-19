import React, { Component } from 'react';
import { action, observable, observe } from 'mobx';
import { IInputDataStore, IInputDataItem } from 'stores/InputDataStore/interface';
import { inject, observer } from 'mobx-react';

interface Props {
    inputDataStore?: IInputDataStore,
    className?: string,
    name?: string,
    inputID: string
    content?: string,
    onBlur?: Function,
    onChange?: Function,
}

@inject("inputDataStore")
@observer
export default class CustomTextInput extends Component<Props> {
    @observable content = '';
    @observable onBlur = this.props.onBlur ? this.props.onBlur : () => {};
    @observable inputDataItem = {} as IInputDataItem;
    
    @action async onChange(_event: any) {
        this.content = _event.target.value;
		this.inputDataItem.inputContent = _event.target.value;
    }

    @action componentDidMount(){
        // this.content = this.props.content!;
        const { inputID, content } = this.props;

		this.inputDataItem = this.props.inputDataStore!.getInputDataStore(inputID, content);
		
		this.content = this.inputDataItem.inputContent;
    }

    render() {
        return (
            <input
                id={this.props.inputID}
                className="field__inherit"
                type="text"
                name={this.props.name}
                value={this.content}
                onChange={e => this.onChange(e)}
            />
        );
    }
}