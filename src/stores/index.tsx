import TodoStore from './TodoStore';
import InputDataStore from './InputDataStore';
import NotificationsStore from './NotificationsStore';
import UserStore from './UserStore';
import ProjectsStore from './ProjectsStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    todoStore: new TodoStore(),
    inputDataStore: new InputDataStore(),
    notificationsStore: new NotificationsStore(),
    userStore: new UserStore(),
    projectsStore: new ProjectsStore(),
}