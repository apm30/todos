import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

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
				<div className="container">
					<Header />
					<AddTodo />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
