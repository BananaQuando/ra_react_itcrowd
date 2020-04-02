import TodoStore from './TodoStore';
import InputDataStore from './InputDataStore';
import NotificationsStore from './NotificationsStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
    inputDataStore: new InputDataStore(),
    notificationsStore: new NotificationsStore()
}