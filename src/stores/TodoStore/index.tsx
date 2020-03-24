import { ITodo, ITodoStore, ITodosList } from './interfaces';
import { observable, action } from 'mobx';

export default class TodoStore implements ITodoStore {
    @observable todoList = {} as ITodosList;

    @action async getAllTodos() {
        console.log(`getAllTodos() from 'stores/TodoStore'`);
        const response = await fetch("https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos");

        const todos = await response.json();
        if (todos) {
            todos.forEach(async (todo: ITodo) => {
                this.todoList[todo.id] = this.formatTodoResponce(todo);
            });
        }
    }

    formatTodoResponce(data: ITodo) {
        return {
            id: data.id,
            title: data.title,
            text: data.text,
            create_date: data.create_date,
            status: data.status,
        };
    }

    @action async getTodo(id: number) {

        if (this.todoList[id]) {
            console.log('return TodoItem from todoList');
            return this.todoList[id];
        } else {
            console.log('return TodoItem from request');
            const request = await fetch(`https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos/${id}`);
            const todo = await request.json();

            return todo;
        }
    }
}