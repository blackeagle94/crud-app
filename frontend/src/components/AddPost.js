import React,{useState} from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          }
        axios.post('http://localhost:3333/create', {
            title:title,
            author:author,
            desc:description
        }, axiosConfig)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setTitle('')
        setAuthor('')
        setDescription('')
    }

	return (
		<div className="addPost">
			<Form className="justify-content-center" onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter Title..." />
				</Form.Group>

				<Form.Group>
					<Form.Label>Author</Form.Label>
					<Form.Control onChange={(e) => setAuthor(e.target.value)} value={author} type="text" placeholder="Author name..." />
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control onChange={(e) => setDescription(e.target.value)} value={description} as="textarea" row={3} placeholder="Type your post body..." />
				</Form.Group>

				<div className="text-center px-4 d-flex justify-content-center ">
					<Button className="btn btn-primary rounded-pill m-3 px-auto" variant="primary" type="submit">Submit</Button>
				</div>
			</Form>
		</div>
	);
};

export default AddPost;
