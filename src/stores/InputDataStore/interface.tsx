
export interface IInputDataStore {
    inputsList: IInputDataList,
    getInputDataStore: Function,
    updateInputData: Function,
    createInputDataStore: Function,
}

export interface IInputDataList {
    [key: string]: IInputDataItem
}

export interface IInputDataItem {
    inputID: string,
    inputContent: string
}