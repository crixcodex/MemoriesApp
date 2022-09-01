import axios from "axios";
require('dotenv').config()


const url = process.env.REACT_APP_API_URL;

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePostData) =>
  axios.patch(`${url}/` + id, updatePostData);
