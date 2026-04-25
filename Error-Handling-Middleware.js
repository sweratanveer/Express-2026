import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send1('Home Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});

// This route will trigger an error when accessed. The error is created and passed to the next() function, which will then be handled by the error-handling middleware.
app.get('/error', (req, res, next) => {
    const error = new Error('This is a custom error');
    error.status = 400;
    next(error);
});


// This is the error-handling middleware. It will catch any errors passed to next() and send a response with the error message.
app.use((error, req, res, next) => {
    res.status(error.status || 500).send('An error occurred: ' + error.message);
});




app.listen(3600, () => {
  console.log('Server is running on port 3600');
});