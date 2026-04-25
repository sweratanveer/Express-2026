import express from 'express';
import userData from './Users.json' with { type: 'json' };
const app = express();

app.get('/', (req, res) => {
    console.log(userData);
    res.send(userData);
});


app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    let filterdData = userData.filter((user) => user.id == id);
    res.send(filterdData);
});


app.listen(3200, () => {
  console.log('Example app listening on port 3200!');
});