import express from 'express';


const app = express();

app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");

app.get("/mail",(req,res)=>
{
    res.render("mail")
})


app.post("/submit-email",(req,res)=>
{
    console.log(req.body);
    res.send("Email Send Successfully")
})

app.listen(3500);
