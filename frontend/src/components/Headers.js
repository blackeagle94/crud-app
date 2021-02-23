import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Headers = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/">POST BLOG</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/posts">Posts</Nav.Link>
				<Nav.Link href="/addpost">Create Post</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Headers;
