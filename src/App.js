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
	render() {
		console.log('todos :', this.state.todos);
		return (
			<div className="App">
				<Todos todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
