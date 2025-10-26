/*

1.
HTML <form> elements only support GET and POST methods.

But in your blog app, you also need PUT (for updating posts) and DELETE (for deleting posts).

method-override is a Node.js/Express middleware that simulates other HTTP methods (PUT, DELETE, etc.) using a POST request.

method-override middleware looks at the query string (_method) or headers.

If it finds _method=PUT, it overrides req.method from POST → PUT.

This library intercepts POST requests and checks if there’s a special query or hidden field called _method.

If it finds _method, it changes the HTTP method before the route is processed by Express.

“Send a normal POST request to /posts/123?_method=DELETE,
but when Express receives it, pretend it’s a DELETE request.”


Browser sends → POST /posts/123?_method=DELETE

method-override sees _method=DELETE

It changes the request to → DELETE /posts/123

Express matches it with your route:

router.delete("/:id", (req, res) => { ... });

2.

Express sees app.use("/posts", postsRoutes).

It tells the app:
👉 “Whenever a request starts with /posts, send it to the postsRoutes router.”

Inside that router:

router.get("/") → actually becomes GET /posts/

router.get("/new") → actually becomes GET /posts/new

router.post("/") → actually becomes POST /posts

etc.

router.get("/") → actually responds to /posts

router.get("/new") → actually responds to /posts/new

3.

Concept	     Description
express()	Creates the main application (like the whole website).
Router()	Creates a mini app (a route module, like the “Posts” section).
app.use("/posts", router)	Mounts that mini app under the /posts URL prefix.


4.

app.set("view engine", "ejs");
That tells Express:

“Whenever I call res.render("filename"), automatically look for a .ejs file inside the views/ folder.”

So:

res.render("home", { posts });
is shorthand for:
res.render("home.ejs", { posts });
Both work the same — the second is just redundant when you’ve set the view engine.


5.

res.render("home", { posts });
This is JavaScript object shorthand syntax.

It means the same as:
res.render("home", { posts: posts });


6.

export default something;
you are exporting one thing as the “default export” from that module.

That means:
You can import it using any name you want in another file.
The name you give it when importing is entirely up to you.

So router is exported as the default export.Here, postsRoutes is just a variable name that now refers to whatever was exported by default from posts.js.



*/