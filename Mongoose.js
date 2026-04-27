import mongoose from 'mongoose';
import express from 'express'
import studentModel from './model/studentModel.js';


const app = express();

app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/School").then(() => {
    console.log("___________connected_________")
})
app.get("/", async (req, res) => {


    const studentData = await studentModel.find()
    res.send(studentData)
})


app.post("/save", async (req, res) => {
    console.log(req.body);
    const { name, age, email } = req.body;

    if (!req.body || !name || !age || !email) {
        res.send({
            message: "Data not  stored",
            success: False,
            storedInfo: null
        })
    }
    const studentData = await studentModel.create(req.body)
    res.send({
        message: "Data stored",
        success: true,
        storedInfo: studentData
    })
})

app.put("/update/:id", async (req, res) =>
{
    console.log(req.body);
const id = req.params.id;
console.log(req.body,id);


const studentData = await studentModel.findByIdAndUpdate(id, {...req.body})
    res.send({
        message: "Data stored",
        success: true,
        storedInfo: studentData
})
});



app.delete("/delete/:id", async (req, res) =>
{
    console.log(req.body);
const id = req.params.id;
console.log(req.body,id);


const studentData = await studentModel.findByIdAndDelete(id)
    res.send({
        message: "Data deleted",
        success: true,
        storedInfo: studentData
})
});
app.listen(3500);

// async function dbConection() {

//     await mongoose.connect("mongodb://localhost:27017/School" );
//     const schema = mongoose.Schema({
//         name:String,
//         email:String,
//         age:Number,
//     })

//     const studentsModel = mongoose.model('students', schema);
//     const result = await studentsModel.find();
//     console.log(result);

// }


// dbConection();

