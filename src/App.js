import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {};
	render() {
		return (
			<div className="App">
				<Todos />
			</div>
		);
	}
}

export default App;
