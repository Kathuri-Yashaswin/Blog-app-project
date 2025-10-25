import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import postsRoutes from "./routes/posts.js";

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Routes
app.use("/posts", postsRoutes);

// Redirect root to /posts
app.get("/", (req, res) => {
  res.redirect("/posts");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
