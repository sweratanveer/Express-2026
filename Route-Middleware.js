// What is route Middleware 
// Route middleware is a type of middleware in Express.js that is used to handle specific routes or groups of routes in an application. It allows developers to define middleware functions that are executed only when a specific route or set of routes is accessed by a client. This can be useful for tasks such as authentication, logging, and validation that are specific to certain routes in the application.

// In Express.js, route middleware can be defined using the app.use() method or by attaching middleware functions directly to specific routes using the app.METHOD() syntax (where METHOD is an HTTP method such as GET, POST, etc.). When a client makes a request to a route that has route middleware attached to it, the middleware function(s) will be executed before the route handler is called. This allows developers to perform tasks such as checking for authentication, validating input, or logging requests before the main logic of the route is executed.
import express from 'express';
const app = express();

function checkAgeRouteMiddleware(req, res, next) {
    if (!req.query.age || req.query.age < 18) {
        res.send('Access denied. You must be at least 18 years old.');
    } else {
        next();
    }
}

function checkURLRouteMiddleware(req, res, next) {
    console.log("user is accessing " + req.url + "Page");
    next();
}


app.get('', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/login',checkURLRouteMiddleware, checkAgeRouteMiddleware, (req, res) => {
    res.send('<h1>Login Page</h1>');
}); 

app.get('/admin', (req, res) => {
  res.send('<h1>Admin Page</h1>');
});

app.get('/user',checkAgeRouteMiddleware ,(req, res) => {
    res.send('<h1>User Page</h1>');
});

app.listen(3500);