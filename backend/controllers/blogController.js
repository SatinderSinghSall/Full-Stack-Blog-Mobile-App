const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "name");
  res.json(blogs);
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "name");
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, author: req.user._id });
  res.status(201).json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.author.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  const updated = await blog.save();
  res.json(updated);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.author.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  await blog.remove();
  res.json({ message: "Blog deleted" });
};
