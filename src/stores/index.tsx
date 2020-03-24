import TodoStore from './TodoStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
}