const express = require('express')
const router = express.Router()

//import the controllers file for functions
const postController = require('../controllers/PostController')

router.get('/', postController.baseRoute)
router.get('/getposts', postController.getPosts)
router.get('/getpost/:id', postController.getSinglePost)
router.post('/create', postController.createPost)
router.put('/post/:id/update', postController.updatePost)
router.delete('/delete/:id', postController.deletePost)

/*//Without controllers
const PostModel = require('../models/Post')
router.get('/', async (req, res) => {
    const posts = await PostModel.find()
    res.json(posts)
})*/

module.exports = router
