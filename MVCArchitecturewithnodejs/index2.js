import express from 'express';
import { handleUser } from './controller/usercontroller.js';
const app = express();

app.set('view engine', 'ejs');

app.get('/user',handleUser)

app.listen(3400, () => {
    console.log('Server is running on port 3400');
});
