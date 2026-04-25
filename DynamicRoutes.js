// What is Dynamic Routes?
// Dynamic Routes are routes that can change based on user input or other factors. 
// They are often used in web applications to create a more personalized experience for the user.
//  For example, a dynamic route might be used to display a user's profile page based on their 
// username.

import express from 'express';
const app = express();
// Dynamic Links 
app.get('/', (req, res) => {
    const users = ['Swera', 'John', 'Jane', 'Doe', 'Smith'];
    let data ='<ul>';
    for (let i = 0; i < users.length; i++) {
        data += `<li><a href="/user/${users[i]}">${users[i]}</a></li>`;
        console.log(users[i]);
    }
    data += '</ul>';
    res.send(data);

});
// Dynamic Routes   
app.get('/user/:name', (req, res) => {
    console.log(req.params.name);
    const name = req.params.name;
    res.send(`This is ${name}'s profile page`);     
});




app.listen(3200,() => {
    console.log('Server is running on port 3200');
})
