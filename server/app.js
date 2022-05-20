const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const parser = require('body-parser');
const Student = require('./models/students.js');
const app = express();

mongoose.connect('mongodb://localhost:27017/students',function(err){
    if(err)
    console.log(err);
    else
    console.log('connected');
})




app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    Student.find((err,obj)=>{
        if(err)
        console.log(err);
        else
        res.send(obj);
    })
})


app.post('/students',(req,res)=>{
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        place:req.body.place
    });

    student.save((err)=>{
        if(err)
        res.send(err);
        else
        res.send('posted');
    })
    
})

app.delete('/students/:id',(req,res)=>{
    Student.deleteOne({_id:req.params.id},(err)=>{
        if(err)
        res.send(err);
        else
        res.send('deleted');
    })
})

app.put('/students/:id',(req,res)=>{
    Student.findOneAndUpdate({_id:req.params.id},{$set:{firstname:req.body.firstname,lastname:req.body.lastname,place:req.body.place}},(err)=>{
        if(err)
        res.send(err);
        else
        res.send('updated!');

    })
})




app.listen(5000,()=>{
    console.log('listening on port 5000!');
})
