import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header style={headerStyle}>
			<h1>Do zrobienia</h1>
			<Link style={linkStyle} to="/">
				Start
			</Link>{' '}
			|
			<Link style={linkStyle} to="/about">
				O stronie
			</Link>
		</header>
	);
};

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
};

export default Header;
