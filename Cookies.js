import express from 'express'
const app = express();


app.set("view engine" , 'ejs')

app.use(express.urlencoded({extended:true}))

app.get("/cookieslogin" , (req,res)=>
{
    res.render("cookieslogin")
})

app.post("/cookiesprofile" , (req,res)=>
{
    res.setHeader('set-Cookie', "login=true")
    res.setHeader('set-Cookie', "name=" +req.body.name)
    res.render("cookiesprofile")
})

app.get("/" , (req,res)=>
{

    res.render("cookieshome")
})

app.listen(3400);