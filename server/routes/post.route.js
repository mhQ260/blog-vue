import express from 'express';
import Post from '../models/post.model';
import { upload } from '../utils';

const router = express.Router();


router.get('/', async (req, res) => {
    const posts = await Post.find({  });
    res.send(posts);
});

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

module.exports = router;

