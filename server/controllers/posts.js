const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  const newPost = await PostMessage.findByIdAndUpdate(_id, post);

  if (!newPost) return res.status(404).json({ m: "No Post found" });

  console.log(`post updated with id: ${_id}`);
  res.json({ message: `post upadated successfully ${_id}` });
};

module.exports = { getPosts, createPost, updatePost };
