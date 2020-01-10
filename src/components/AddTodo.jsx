import React, { Component } from 'react';

class AddTodo extends Component {
	state = { title: '' };
	onChange = e => this.setState({ [e.target.name]: e.target.value });
	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
	};
	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type="text"
					name="title"
					id=""
					placeholder="Dodaj zadanie"
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input
					type="submit"
					value="Dodaj"
					className="btn"
					style={{ flex: '1' }}
				/>
			</form>
		);
	}
}

export default AddTodo;
