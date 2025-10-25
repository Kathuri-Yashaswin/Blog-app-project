import { Router } from "express";

const router = Router();

let posts = []; // In-memory storage

// 🏠 Index - show all posts
router.get("/", (req, res) => {
  res.render("home", { posts });
});

// 🆕 New post form
router.get("/new", (req, res) => {
  res.render("new");
});

// ➕ Create post
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const id = Date.now().toString(); // unique string ID
  posts.push({ id, title, content });
  res.redirect("/posts");
});

// ✏️ Edit post form
router.get("/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit", { post });
});

// 🔄 Update post
router.put("/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  post.title = req.body.title;
  post.content = req.body.content;

  res.redirect("/posts");
});

// 🗑️ Delete post
router.delete("/:id", (req, res) => {
  const exists = posts.some(p => p.id === req.params.id);

  if (!exists) {
    return res.status(404).send("Post not found");
  }

  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect("/posts");
});

export default router;