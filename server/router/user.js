const express = require('express');
const Supplier = require('../models/hospital');
const router = express.Router();


router.get('/',  async (req, res) => {
    try {
		const posts = await Supplier.find()
		res.json({ success: true, posts })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
router.post('/',  async (req, res) => {
	console.log(req.body)
	const {username,address,phone,email} = req.body.user
	try {
	  const newPost = new Supplier({
		username,
		address,
		phone,
		email
	  })
	  await newPost.save()
  
	  res.json( {post: newPost })
	  console.log(req)
	} catch (error) {
	  console.log(error)
	  res.status(500).json({ success: false, message: 'Internal server error' })
	}
  })
  
router.get('/search',  async (req, res) => {
    try {
		const posts = await Supplier.find()
		res.json({ success: true, posts })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})


router.put('/:id',  async (req, res) => {
	const {username,address,phone,email} = req.body.user
    console.log(req.params)
	try {
		let updatedPost = {
			username,
		    address,
		    phone,
		    email
			
		}

		const postUpdateCondition = { _id: req.params.id}

		updatedPost = await Supplier.findOneAndUpdate(
			postUpdateCondition,
			updatedPost,
			{ new: true }
		)

		// User not authorised to update post or post not found
		if (!updatedPost)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised'
			})

		res.json({
			message: 'Excellent progress!',
			post: updatedPost
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})


  router.delete('/:id', async (req, res) => {
	try {
		const postDeleteCondition = { _id: req.params.id }
		const deletedPost = await Supplier.findOneAndDelete(postDeleteCondition)

		if (!deletedPost)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised'
			})

		res.json({ success: true, post: deletedPost })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
module.exports = router;