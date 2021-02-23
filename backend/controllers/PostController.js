const mongoose = require('mongoose')
const Posts = require('../models/Post')
const request = require('request')

exports.baseRoute = async (req, res) => {
    res.send('Server Running')
}

exports.getPosts = async (req, res, next) => {
    const posts = await Posts.find()
    res.json(posts)
    
}

exports.createPost = async (req, res) => {
    await new Posts(req.body).save((err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Post created',
                data
            })
        }
    })
}

exports.getSinglePost = async (req, res) => {
    let postID = req.params.id

    await Posts.findById({_id: postID}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Post found',
                data
            })
        }
    })
}

exports.updatePost = async (req, res) => {
    let postID = req.params.id

    await Posts.findByIdAndUpdate({_id: postID}, {$set: req.body}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Post Updated',
                data
            })
        }
    })
}

exports.deletePost = async (req, res) => {
    let postID = req.params.id

    await Posts.deleteOne({_id: postID}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Post Deleted',
                data
            })
        }
    })
}