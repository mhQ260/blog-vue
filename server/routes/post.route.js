import express from 'express';
import Post from '../models/post.model';
import { upload } from '../utils';

const router = express.Router();


router.get('/', async (req, res) => {
    const posts = await Post.find({  });
    res.send(posts);
});

router.get('/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    if(post) {
        res.send(post);
    } else {
        res.status(401).send({ msg: 'Post not foundend' });
    }
});

router.put('/:id', upload.single('image'), async (req, res) => {
    const postId = req.params.id;
    console.log(JSON.stringify(req.body))
    if(req.body.image != "") {
        if(post) {
            post.title = req.body.title;
            post.category = req.body.category;
            post.text = req.body.text;
            post.image = req.file.filename;
            const updatedPost = await post.save();
            if (updatedPost) {
                return res.status(200).send({ msg: 'Post has been updated.', data: updatedPost });
            }
        }
    } else {
        if(post) {
            post.title = req.body.title;
            post.category = req.body.category;
            post.text = req.body.text;
            post.image;
            const updatedPost = await post.save();
            if (updatedPost) {
                return res.status(200).send({ msg: 'Post has been updated.', data: updatedPost });
            }
        }

    }
    
    return res.status(500).send({ msg: 'Error in updating post!' });
})

router.post('/', upload.single('image'), async (req, res) => {
    const post = new Post({
        title: req.body.title,
        category: req.body.category,
        text: req.body.text,
        image: req.file.filename
    });
    const newPost = await post.save();
    if(newPost){
        return res.status(201).send({ msg: 'New post has been added.', data: newPost });
    }
    return res.status(500).send({ msg: 'Error in added post!' });
})

router.delete('/:id', async (req, res) => {
    const deletedPost = await Post.findById({ _id: req.params.id });
    if(deletedPost) {
        await deletedPost.remove();
        res.status(200).send({ msg: 'Post deleted!' });
    } else {
        res.status(401).send({ msg: 'Error in post deletion' });
    }
})

module.exports = router;

