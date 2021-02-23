import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardDeck, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = (props) => {
	const [ post, setPost ] = useState();
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ description, setDescription ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': '*'
			}
		};
		axios
			.put(
				`http://localhost:3333/post/${props.match.params.id}/update`,
				{
					title: title,
					author: author,
					desc: description
				},
				axiosConfig
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setTitle('');
		setAuthor('');
		setDescription('');
	};

	useEffect(
		() => {
			axios
				.get(`http://localhost:3333/getpost/${props.match.params.id}`)
				.then((res) => {
					const data = res.data.data
					setPost(res.data.data);
					setTitle(data.title);
					setAuthor(data.author);
					setDescription(data.desc);
					console.log(res.data.data);
				})
				.catch((err) => console.log(err));
		},
		[show]
	);

	const deletePost = () => {
		axios
			.delete(`http://localhost:3333/delete/${props.match.params.id}`)
			.then((res) => {
				console.log(res.data.data);
			})
			.catch((err) => console.log(err));
	};

	console.log(props.match.params.id);
	console.log(post);
	return (
		<CardDeck>
			{post && (
				<Card className="m-2 d-flex justify-content-around">
					<Card.Body>
						<p className="text-muted">Title:</p>
						<Card.Title>{post.title}</Card.Title>
						<p className="text-muted">Author:</p>
						<Card.Title>{post.author}</Card.Title>
						<p className="text-muted">Description:</p>
						<Card.Text>{post.desc}</Card.Text>
					</Card.Body>

					<div className="text-center px-4 d-flex justify-content-center ">
						<Button className="btn btn-success rounded-pill m-3 px-auto" onClick={handleShow}>
							Edit
						</Button>
						<Link to="/posts">
							<Button onClick={deletePost} className="btn btn-danger rounded-pill m-3 px-auto">
								Delete
							</Button>
						</Link>
					</div>
				</Card>
			)}

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="p-2">
				<Form className="justify-content-center" onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							type="text"
							placeholder="Enter Title..."
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Author</Form.Label>
						<Form.Control
							onChange={(e) => setAuthor(e.target.value)}
							value={author}
							type="text"
							placeholder="Author name..."
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							onChange={(e) => setDescription(e.target.value)}
							value={description}
							as="textarea"
							row={3}
							placeholder="Type your post body..."
						/>
					</Form.Group>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" type="submit" >
							Save
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</CardDeck>
	);
};

export default Post;
