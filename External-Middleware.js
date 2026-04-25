import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});


app.get("/wait"  , (req, res) => {
  setTimeout(() => {
    res.send("Waited for 1 second");
  }, 1000);
});

app.listen(3400, () => {
  console.log('Server is running on port 3400');
});
