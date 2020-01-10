import React, { Component } from 'react';

class AddTodo extends Component {
	state = {};
	render() {
		return (
			<form style={{ display: 'flex' }}>
				<input
					type="text"
					name="title"
					id=""
					placeholder="dodaj zadanie"
					style={{ flex: '10', padding: '5px' }}
				/>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={{ flex: '1' }}
				/>
			</form>
		);
	}
}

export default AddTodo;
