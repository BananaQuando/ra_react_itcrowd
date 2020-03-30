export interface ITodoStore {
    todoList: ITodosList,
    userTodosId: IUserTodosId,
    getAllTodos: Function,
    getUserTodos: Function,
    getTodo: Function,
    createTodo: Function,
    changeTodo: Function,
    removeTodo: Function
}

export interface ITodosList {
    [key: string]: ITodo
}

export interface IUserTodosId {
    [key: string]: number[]
}

export interface ITodo {
    id: number,
    user_id: number,
    title: string,
    text: string,
    description: string,
    status: number,
    remember_token: string,
    created_at: Date,
    updated_at: Date,
}

export interface ITodoValues {
    [key: string]: string
}