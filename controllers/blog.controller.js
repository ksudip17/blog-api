import Blog from "../models/blog.model.js";


export const createBlog = async (req,res,next) => {
    try {
       const blog = await Blog.create(req.body);

       res.status(201).json({ success:true, message:'Blog created Successfully', data:blog})

    } catch (error) {
        next(error);
    }
}

export const getBlogs = async (req,res,next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success:true, data:blogs})

    } catch (error) {
        next(error);
    }
}

export const getBlog = async (req,res,next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            const error = new Error('Blog not found');
            error.statusCode=404;
            throw error;
        }

        res.status(200).json({ success:true, data:blog });
    } catch (error) {
        next(error);
    }
}

export const editBlog = async (req,res,next) => {
    try {
        const { id } = req.params;
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body);

        if (!updateBlog) {
            const error = new Error('Blog not found');
            error.statusCode=404;
            throw error;
        }

        const updatedBlog = await Blog.findById(id);

        res.status(200).json({ success:true, message:'blog updated successfully', data:updatedBlog});
    } catch (error) {
        next(error);
    }
}

export const deleteBlog = async (req,res,next) => {
    try {
        const { id } = req.params;
        const dltBlog = await Blog.findByIdAndDelete(id);

        if (!dltBlog) {
            const error = new Error('Blog not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ success:true, message:"Blog deleted successfully" });
     } catch (error) {
        next(error);
    }
}

