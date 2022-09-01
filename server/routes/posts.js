const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts");

router.get("/", postsController.getPosts);
router.post("/", postsController.createPost);
router.patch("/:id", postsController.updatePost);

module.exports = router;
