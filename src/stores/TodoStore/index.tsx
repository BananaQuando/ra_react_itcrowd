import { ITodo, ITodoStore, ITodosList, IUserTodosId } from './interfaces';
import { observable, action } from 'mobx';

export default class TodoStore implements ITodoStore {
    @observable todoList = {} as ITodosList;
    @observable userTodosId = {} as IUserTodosId;
    @observable userTodosList = [] as ITodo[];

    @action async getAllTodos() {
        console.log(`getAllTodos() from request`);
        const response = await fetch("http://127.0.0.1:8000/api/tasks");

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

    @action async getUserTodos(userID: number) {
        if (this.userTodosId[userID]) {
            return await this.fetchUserTodos(this.userTodosId[userID]);;
        } else {
            this.userTodosId[userID] = [] as number[];
            console.log(`return userTodos from request`);
            const response = await fetch(`http://127.0.0.1:8000/api/tasks?user_id=${userID}`);
            const data = await response.json();

            data.forEach(async (el: ITodo) => {
                const todo = this.formatTodoResponce(el);
                this.userTodosId[userID].push(el.id);
                if (!this.todoList[todo.id]) {
                    this.todoList[todo.id] = todo;
                }
                // this.userTodosList.push(todo);
            });
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
            const request = await fetch(`http://127.0.0.1:8000/api/tasks/${todoID}`);
            const todo = this.formatTodoResponce(await request.json());
            this.todoList[todo.id] = todo;
            return this.todoList[todo.id];
        }
    }

    @action async createTodo() {
        return this.todoList['new-todo'] = {
            id: Math.random() * 10000,
            title: "",
            user_id: 0,
            remember_token: '0',
            text: "",
            created_at: new Date("2018-03-16"),
            updated_at: new Date("2018-03-16"),
            status: 0,
            description: ""
        };
    }

    @action async removeTodo(todoID?: number) {
        if (todoID) {
            // const request = await fetch(`http://127.0.0.1:8000/api/tasks/${todoID}`, {
            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(await this.getTodo(todoID))
            // }).then(() => {
            // });
            const userID = this.todoList[todoID].user_id;
            const index = this.userTodosId[userID].indexOf(todoID);
            if (index > -1) {
                this.userTodosId[userID].splice(index, 1);
            }
            console.log(this.userTodosId[userID]);
            delete this.todoList[todoID];
            delete this.userTodosList[userID];
            console.log(this.userTodosList);
            console.log(this.todoList[todoID]);
        }
    }

    @action async changeTodo(todoID?: number) {
        if (todoID) {
            const request = await fetch(`http://127.0.0.1:8000/api/tasks/${todoID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(await this.getTodo(todoID))
            });
        }
    }
}