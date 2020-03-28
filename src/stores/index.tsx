import TodoStore from './TodoStore';
import CustomEditorStore from './CustomEditorStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
    customEditorStore: new CustomEditorStore()
}