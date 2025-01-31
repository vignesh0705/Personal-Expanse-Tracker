const express=require('express');
const app=express();
const port=8080;
const user=require('./models/user');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
const mongoose=require('mongoose');
const income = require('./models/income');


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.post('/signup',async(req,res)=>{
    try{
        var {username,email,password}=req.body;
    var newUser=new user({username,email,password});
    await newUser.save();
    res.status(201).json({message:true});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:false});
    }
});
app.post('/login',async(req,res)=>{
    try{
        let {email,password}=req.body;
        let user1=await user.findOne({email:email});
        if(user1 && user1.password===password){
            res.status(200).json({message:true});
        }
        else{
            res.status(200).json({message:false});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:false});
    }
});
app.post('/addexpanse',async(req,res)=>{
    try{
        let {title,amount,date}=req.body;
        let newExpanse=new expanse({title,amount,date});
        await newExpanse.save();
        res.status(201).json({message:true});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:false});
    }
});
app.post('/addincome',async(req,res)=> {
    try{
        let{source,amount,date} =req.body;
        let newIncome= new income({source,amount,date});
        await newIncome.save();
        res.status(201).json({message:true});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:false});
    }
});
app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
}
);
