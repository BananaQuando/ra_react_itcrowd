export interface ITodoStore {
    todoList: ITodosList,
    userTodoList: ITodosList,
    getAllTodos: Function,
    getUserTodos: Function,
    getTodo: Function,
    getUserTodo: Function, 
}

export interface ITodosList {
    [key: number]: ITodo
}

export interface ITodo {
    id: number,
    title: string,
    text: string,
    create_date: Date,
    status: number,
    description: string
}

export interface ITodoValues {
    [key: string]: string
}