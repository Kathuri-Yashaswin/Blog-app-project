/*

1.
HTML <form> elements only support GET and POST methods.

But in your blog app, you also need PUT (for updating posts) and DELETE (for deleting posts).

method-override is a Node.js/Express middleware that simulates other HTTP methods (PUT, DELETE, etc.) using a POST request.

method-override middleware looks at the query string (_method) or headers.

If it finds _method=PUT, it overrides req.method from POST → PUT.

2.



*/