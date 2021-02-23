import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardDeck, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Posts = () => {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3333/getposts`)
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<CardDeck>
			{posts.map((post) => {
				return (
					<Card key={post._id} className="m-2 d-flex justify-content-around">
						<Card.Body>
                            <p className="text-muted">Title:</p>
							<Card.Title>{post.title}</Card.Title>
                            <p className="text-muted">Description:</p>
							<Card.Text>
								{post.desc.split(' ').splice(0, 10).join(' ')}
							</Card.Text>
						</Card.Body>
						
							<div className="text-center px-4 d-flex justify-content-center ">
                            <Link to={`/getpost/${post._id}`}><Button className="btn btn-primary rounded-pill m-3 px-auto">View More</Button></Link>
                            </div>
						
					</Card>
				);
			})}
		</CardDeck>
	);
};

export default Posts;
