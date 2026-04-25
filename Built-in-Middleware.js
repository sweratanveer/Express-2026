// What is Built-in Middleware?
// Built-in middleware functions are included in Express and can be used without any additional installation. They provide common functionalities that are often needed in web applications, such as parsing request bodies, serving static files, and handling CORS (Cross-Origin Resource Sharing).
import express from 'express';
import path from 'path';
const app = express();
// Built in middleware to parse URL-encoded data from the request body
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'));
app.get('/', (req, res) => {
    const filePath = path.resolve('view/home1.html');
    res.sendFile(filePath);
});




app.get('/login', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted');
});

app.listen(3700, () => {
  console.log('Server running...');
});