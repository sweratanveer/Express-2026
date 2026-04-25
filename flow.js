const express = require('express');

const app = express();
app.get('', (req, res) => {
  res.send('This is about Page!');

}); 

console.log(app);
app.listen(3100)