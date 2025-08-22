import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minLength:5,
        maxLength:100,
    },
    content: {
        type: String,
        required: [true, 'content is required'],
    },
    category:{
        type: String,
        enum:['sports','technology','ai','politics','entertainment'],
    },
}, {timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;