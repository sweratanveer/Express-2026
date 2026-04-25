import { userList } from '../Models/userModel.js';

export function handleUser(req, res) {

    const userData = userList();
    console.log(userData);
    res.render('user' , { users: userData } );
};