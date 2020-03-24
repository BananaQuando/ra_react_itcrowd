export interface ITodoStore {
    todoList: ITodosList,
    getAllTodos: Function,
    getTodo: Function
}

export interface ITodosList {
    [key: number]: ITodo
}

export interface ITodo {
    id: number,
    title: string,
    text: string,
    create_date: Date,
    status: number
}