import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const dbName = "School";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);



const app = express();
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.set('view engine', 'ejs');


await client.connect(); // ✅ connect once

const db = client.db(dbName);

app.get("/api", async (req, res) => {
    const collection = db.collection('students');
    const students = await collection.find().toArray();
    res.send(students);
});

app.get("/ui", async (req, res) => {
    const collection = db.collection('students');
    const students = await collection.find().toArray();
   res.render('studentsmongodb', { students });
});

app.get ('/add' , (req,res)=>
{
    res.render('add-studentwithmongo');
   
})
app.post("/add-student", async (req, res) => {
    console.log(req.body);
     const collection = db.collection('students');
    const result = await collection.insertOne(req.body);
console.log(result);

    res.send("Data received and student added successfully!");

});


app.post("/add-student-api", async (req, res) => {
    console.log(req.body);
    const {name, email,age} = req.body;
if(!name || !email || !age){
    return res.status(400).send({message:"All fields are required"});
}

    const collection = db.collection('students');
    const result = await collection.insertOne(req.body);
    res.send({"message":result})
});


app.delete("/delete/:id", async (req, res) => {
    console.log(req.params.id);
    const collection = db.collection('students')
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) })

    if(result){
    res.send({
        message:"Student deleted successfully",
        success:true
    })
}else{    res.send({
        message:"Student not found",
        success:false   
    })
}

});


app.get("/ui/delete/:id", async (req, res) => {
    console.log(req.params.id);
    const collection = db.collection('students')
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) })

    if(result){
    res.send(" <h1>Student deleted successfully</h1>")
}else{    
     res.send(" <h1>Student not  deleted </h1>")
}

});


app.get("/ui/student/:id", async (req, res) => {
    const id = (req.params.id);
    console.log(id);
    const collection = db.collection('students')
    const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
    res.render('update-student', {result})
});



app.get("/student/:id", async (req, res) => {
    const id = (req.params.id);
    console.log(id);
    const collection = db.collection('students')
    const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
    res.send({
        message:"Student found",
        sucess:true,
        result:result
    });
});


app.put("/update/:id", async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    const collection = db.collection('students');

    const filter = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };

    const result = await collection.updateOne(filter, update);

    if (result) {
        res.send({
        message:"Data Updated",
        sucess:true,
        result:req.body
    })
    } else {
       res.send({
        message:"Data not updated",
        sucess:false,
        result:null
    })
    }
});





app.listen(3500, () => {
    console.log("Server running on port 3500");
})