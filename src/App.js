import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {
		todos: [
			{ id: 1, title: 'pierwsza rzecz do zrobienia', completed: false },
			{ id: 2, title: 'druga rzecz do zrobienia', completed: false },
			{ id: 3, title: 'trzecia rzecz do zrobienia', completed: false }
		]
	};
	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	delTodo = id => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};
	render() {
		console.log('todos :', this.state.todos);
		return (
			<div className="App">
				<Todos
					todos={this.state.todos}
					markComplete={this.markComplete}
					delTodo={this.delTodo}
				/>
			</div>
		);
	}
}

export default App;
