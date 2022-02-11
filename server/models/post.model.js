import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String,  },
    created: { type: Date, default: Date.now }
})

const postModel = mongoose.model("Post", postSchema);

export default postModel;