import express from 'express'
import path from 'path'

const app = express();

// Path to public folder and stylesheet file
const publicPath = path.resolve('public');
app.use(express.static(publicPath));
console.log(publicPath);

// Path to public folder and image folder
const imagesPath = path.resolve('public/images');
app.use(express.static(imagesPath));
console.log(imagesPath);

app.get('/', (req, res) => {
    const absPath = path.resolve('view/home.html');
    console.log(absPath);
  res.sendFile(absPath);
});

app.get('/login', (req, res) => {
    const absPath = path.resolve('view/login.html');
    console.log(absPath);
  res.sendFile(absPath);
});

app.get('/about', (req, res) => {
    const absPath = path.resolve('view/about.html');
    console.log(absPath);
  res.sendFile(absPath);
});

app.use((req, res) => {
    const absPath = path.resolve('view/404.html');
    console.log(absPath);
    res.status(404).sendFile(absPath);
});
app.listen(3400);