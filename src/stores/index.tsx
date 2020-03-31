import TodoStore from './TodoStore';
import InputDataStore from './InputDataStore';
import CustomEditorStore from './CustomEditorStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
    customEditorStore: new CustomEditorStore(),
    inputDataStore: new InputDataStore()
}