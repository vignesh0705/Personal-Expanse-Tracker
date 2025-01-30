const mongoose=require('mongoose');

const expanseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Expanse',expanseSchema);