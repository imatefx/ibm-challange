module.exports = (app) => {
	const posts = require("../controllers/post.controller.js");

	const router = require("express").Router();

	// Create a new post
	router.post("/", posts.create);

	// Retrieve all posts
	router.get("/", posts.findAll);

	// Retrieve a single post with id
	router.get("/:id", posts.findOne);

	app.use("/api/posts", router);
};
