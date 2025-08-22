import { Router } from "express";
import {createBlog, deleteBlog, editBlog, getBlog, getBlogs} from "../controllers/blog.controller.js";

const blogRouter = Router();

// Path: /api/v1/posts
blogRouter.post('/posts', createBlog);

blogRouter.get('/posts', getBlogs);

blogRouter.get('/posts/:id', getBlog);

blogRouter.put('/posts/:id/edit', editBlog);

blogRouter.delete('/posts/:id', deleteBlog);

export default blogRouter;