// What is Template Engine?
// Template Engine is used for  rendering dynamic content on the web pages. It allows us to create HTML templates with placeholders for dynamic data, which can be filled in at runtime. This is particularly useful for creating web applications that need to display different content based on user input or other factors.

// Some popular template engines for Node.js include:   
// 1. EJS (Embedded JavaScript)
// 2. Pug (formerly Jade)
// 3. Handlebars
// 4. Mustache

//1. EJS (Embedded JavaScript):
// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It uses <% %> for control flow and <%= %> for outputting values.
//2.

import express from "express";
const app = express();


app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home", {name: 'Swera Rana', ytchannel: 'Code With Swera', age: 19});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});