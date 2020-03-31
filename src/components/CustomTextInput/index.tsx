import React, { Component } from 'react';
import { action, observable, observe } from 'mobx';
import { IInputDataStore } from 'stores/InputDataStore/interface';
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
    
    @action async onChange(evt: any) {
        let { inputContent } = await this.props.inputDataStore!.updateInputData(this.props.inputID, evt.target.value);
        this.content = inputContent;
    }

    @action componentDidMount(){
        this.content = this.props.content!;
    }

    render() {
        return (
            <input
                className="field__inherit"
                type="text"
                name={this.props.name}
                value={this.content}
                onChange={e => this.onChange(e)}
                // onBlur={(e) => this.updateTodo(e)}
            />
        );
    }
}