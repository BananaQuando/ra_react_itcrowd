import TodoStore from './TodoStore';
import InputDataStore from './InputDataStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
    inputDataStore: new InputDataStore()
}