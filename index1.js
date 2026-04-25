import express from 'express'
const app = express();
import home from './pages1/home.js'
import login from './pages1/login.js'
import submit from './pages1/submit.js'

app.get('/home', (req, res) => {
  res.send(home());
});

app.get('/login', (req, res) => {
  res.send(login());
});

app.post('/submit', (req, res) => {
  res.send(submit());
});

app.listen(3200)