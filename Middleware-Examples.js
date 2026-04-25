import express from 'express';
const app = express();

// Function to check the age of the user
// function ageCheck(req, res, next) {
//     if (!req.query.age || req.query.age < 18) {
//         res.send('Access denied. You must be at least 18 years old.');
//     } else {
//         next();
//     }
// }
// app.use(ageCheck);

// Function for checking the Ip address
function ipCheck(req, res, next) {
    const ip = req.socket.remoteAddress;
    console.log(ip);
    if(ip.includes(' 192.168.56.1'))
        res.send('Access denied. Your IP address is not allowed.');
    else
        next();
}
app.use(ipCheck);


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin Page</h1>');
});

app.listen(3600);