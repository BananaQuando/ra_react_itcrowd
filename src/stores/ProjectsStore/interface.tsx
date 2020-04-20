import { ITodosList } from "stores/TodoStore/interfaces";

export interface IProjectsStore {
    getProjectsList: Function
}

export interface IUserProjectsList {
    [key: number]: IProject
}

export interface IProjectsList {
    [key: number]: IProject
}

export interface IProject {
    id: number
    name: string
    description: string
    user_id: number
    created_at: Date
    updated_at: Date
    tasks: ITodosList[]
}