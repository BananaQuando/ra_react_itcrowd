import { ITodo, ITodoStore, ITodosList } from './interfaces';
import { observable, action } from 'mobx';

export default class TodoStore implements ITodoStore {
    @observable todoList     = {} as ITodosList;
    @observable userTodoList = {} as ITodosList;

    @action async getAllTodos() {
        console.log(`getAllTodos() from request`);
        const response = await fetch("https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos");

        const todos = await response.json();
        if (todos) {
            todos.forEach(async (todo: ITodo) => {
                this.todoList[todo.id] = this.formatTodoResponce(todo);
            });
        }
    }

    @action async getUserTodos(userID: number){
		if (this.userTodoList[userID]){
            console.log(`return userTodos from userTodoList`);
			return this.userTodoList[userID];
		}else{
            console.log(`return userTodos from request`);
			const response = await fetch(`https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos?user_id=${userID}`);
			const data = await response.json();

			data.forEach(async (el: ITodo)  => {
                const todo = await this.formatTodoResponce(el);

                this.userTodoList[todo.id] = this.formatTodoResponce(todo);
			});
			
			return this.userTodoList[userID];
		}
    }

    formatTodoResponce(data: ITodo) {
        return {
            id: data.id,
            title: data.title,
            text: data.text,
            create_date: data.create_date,
            status: data.status, 
            description: "Test description"
        };
    }

    @action async getUserTodo(todoID: number) {
        if (this.userTodoList[todoID]) {
            console.log('return TodoItem from userTodoList');
            return this.userTodoList[todoID];
        } else {
            console.log('return TodoItem from request');
            const request = await fetch(`https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos/${todoID}`);
            const todo = await request.json();

            return todo;
        }
    }

    @action async getTodo(todoID: number) {
        if (this.todoList[todoID]) {
            console.log('return TodoItem from todoList');
            return this.todoList[todoID];
        } else {
            console.log('return TodoItem from request');
            const request = await fetch(`https://my-json-server.typicode.com/PEDROMACHO/json-testing-data/todos/${todoID}`);
            const todo = await request.json();

            return todo;
        }
    }
}