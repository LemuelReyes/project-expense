const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// MIDDLEWARE
app.set('view engine', 'pug');

// GET BACK ALL POST
router.get('/', async(req,res) => {
    try {
        const documents = await Expenses.find();
        res.render('expenses', { expenseReport: documents })
    } catch(err) {
        res.json({ message: err});
    }
});
// SUBMITS A POST
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err })
    }

    res.render('index', {variables: post});
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({ message: err })
    }
});

// DELETE SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost);
    } catch(err) {
        res.json({ message: err })
    }
});

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {title: req.body.title } }
            );
        res.json(updatedPost);
    } catch(err) {
        res.json({ message: err })
    }
});

module.exports = router;