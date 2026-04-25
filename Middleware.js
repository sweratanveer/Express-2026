import express from 'express';
const app = express();

// Middleware function to check the route being accessed
function checkRoute(req, res, next) {
    console.log("user is accessing " + req.url + "Page");
    next();
}
app.use(checkRoute);


// Types of Middleware
// 1. Application-level Middleware
// Middleware functions that are bound to an instance of the Express application object using app.use() or app.METHOD() (where METHOD is an HTTP method, such as GET, POST, etc.). These middleware functions are executed for every request to the application or for specific routes.
// Example 
// app.use(checkRoute); // This middleware will be executed for every request to the application
// 2. Router-level Middleware
// Middleware functions that are bound to an instance of the Express router object using router.use() or router.METHOD(). These middleware functions are executed for requests that match the specified route or routes defined in the router.
// Example
// const router = express.Router();
// router.use(checkRoute); // This middleware will be executed for requests that match the routes defined in the router
// 3. Error-handling Middleware
// Middleware functions that are defined with four parameters (err, req, res, next) and are used to handle errors in the application. These middleware functions are executed when an error is passed to the next() function or when an error occurs in the application.
// Example
// function errorHandler(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// }
// app.use(errorHandler); // This middleware will be executed when an error occurs in the application

// 4. Built-in Middleware
// Middleware functions that are included with Express and can be used to perform common tasks such as serving static files, parsing request bodies, and handling CORS (Cross-Origin Resource Sharing). Examples of built-in middleware include express.static(), express.json(), and express.urlencoded().
// Example
// app.use(express.static('public')); // This middleware will serve static files from the 'public' directory
// 5. Third-party Middleware
// Middleware functions that are created by third-party developers and can be installed using npm (Node Package Manager). These middleware functions can provide additional functionality to the application, such as authentication, logging, and validation. Examples of third-party middleware include morgan (for logging), passport (for authentication), and express-validator (for validation).
// Example
// import morgan from 'morgan';
// app.use(morgan('combined')); // This middleware will log HTTP requests using the 'combined' format

// Benefits of Middleware in express.js
// 1. Code Reusability: Middleware functions can be reused across different routes and applications, which helps to reduce code duplication and improve maintainability.
// 2. Separation of Concerns: Middleware functions can be used to separate different concerns in the application, such as authentication, logging, and error handling, which helps to improve the organization and readability of the code.
// 3. Flexibility: Middleware functions can be added or removed from the application as needed, which allows for greater flexibility in how the application is structured and how it handles requests.
// 4. Performance: Middleware functions can be used to optimize the performance of the application by caching responses, compressing data, and handling errors more efficiently.


app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users', (req, res) => {
    res.send('Users Page');
});

app.get('/products', (req, res) => {
    res.send('Products Page');
});

app.listen(3500);