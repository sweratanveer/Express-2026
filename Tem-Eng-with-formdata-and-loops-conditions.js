import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/add-user', (req, res) => {
    res.render('addUser');
});

app.post('/submit-user', (req, res) => {
    console.log(req.body);
    res.render('SubmitUser', req.body);
});


app.get('/users', (req, res) => {
    const users = [
        { name: 'Sanam', age: 30 },
        { name: 'Swera', age: 25 },
        { name: 'YUsra', age: 35 }
    ];
    res.render('users', { users: users, isLogin: false });

});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});