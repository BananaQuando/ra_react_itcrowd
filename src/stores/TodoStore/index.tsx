import { ITodo, ITodoStore, ITodosList, IUserTodosId, ITodoValues } from './interfaces';
import { observable, action } from 'mobx';

export default class TodoStore implements ITodoStore {
    @observable todoList = {} as ITodosList;
    @observable userTodosId = {} as IUserTodosId;
    @observable userTodosList = [] as ITodo[];

    @action async getAllTodos() {
        console.log(`getAllTodos() from request`);
        const response = await fetch("http://wf.quando.pro/api/tasks");

        const todos = await response.json();
        if (todos) {
            todos.forEach(async (todo: ITodo) => {
                this.todoList[todo.id] = this.formatTodoResponce(todo);
            });
        }
    }

    async fetchUserTodos(list: number[]) {
        return Promise.all(list.map(async (id) => await this.getTodo(id)))
    }

    async requestGetUserTodos(userID: number) {
        this.userTodosId[userID] = [] as number[];
        console.log(`return userTodos from request`);
        const response = await fetch(`http://wf.quando.pro/api/tasks?user_id=${userID}`);
        const data = await response.json();

        data.forEach(async (el: ITodo) => {
            const todo = this.formatTodoResponce(el);
            this.userTodosId[userID].push(el.id);
            if (!this.todoList[todo.id]) {
                this.todoList[todo.id] = todo;
            }
        });

        return this.userTodosId;
    }

    @action async getUserTodosID(userID: number) {
        if (this.userTodosId[userID]) {
            return this.userTodosId[userID];
        } else {
            await this.requestGetUserTodos(userID);
            return this.userTodosId[userID];
        }
    }

    @action async getUserTodos(userID: number) {
        if (this.userTodosId[userID]) {
            return await this.fetchUserTodos(this.userTodosId[userID]);;
        } else {
            await this.requestGetUserTodos(userID);
            return await this.fetchUserTodos(this.userTodosId[userID]);
        }
    }

    formatTodoResponce(data: ITodo): ITodo {
        return {
            id: data.id,
            user_id: data.user_id,
            title: data.title,
            text: data.text,
            description: data.description,
            status: data.status,
            remember_token: data.remember_token,
            created_at: data.created_at,
            updated_at: data.updated_at,
        };
    }

    @action async getTodo(todoID: number): Promise<ITodo> {
        if (this.todoList[todoID]) {
            console.log('return TodoItem from todoList');
            return this.todoList[todoID];
        } else {
            console.log('return TodoItem from request');
            const request = await fetch(`http://wf.quando.pro/api/tasks/${todoID}`);
            const todo = this.formatTodoResponce(await request.json());
            this.todoList[todo.id] = todo;
            return this.todoList[todo.id];
        }
    }

    @action async createTodo(userID: number) {
        const request = await fetch(`http://wf.quando.pro/api/tasks/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: userID } as ITodo)
        });
        let todo = this.formatTodoResponce(await request.json());
        if (!this.userTodosId[userID]) {
            this.userTodosId[userID] = [] as number[];
        }
        this.userTodosId[userID].push(todo.id);
        this.todoList[todo.id] = todo;

        return this.todoList[todo.id];
    }

    @action async removeTodo(todoID?: number) {
        if (todoID) {
            const request = await fetch(`http://wf.quando.pro/api/tasks/${todoID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(await this.getTodo(todoID))
            }).then(() => {
                const userID = this.todoList[todoID].user_id;
                const index = this.userTodosId[userID].indexOf(todoID);
                if (index > -1) {
                    this.userTodosId[userID].splice(index, 1);
                }
                delete this.todoList[todoID];
                delete this.userTodosList[userID];
            });
        }
    }

    @action async saveTodo(todoID?: number) {
        if (todoID) {
            await fetch(`http://wf.quando.pro/api/tasks/${todoID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(await this.getTodo(todoID))
            });
        }
    }
} 