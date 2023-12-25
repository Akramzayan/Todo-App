const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const todoSchema= new Schema ({
    task:{
        type: String,
        required:true
    },
    Priority:{
        type:String,
        required:true
    },
    InProgress:{
        type:String,
        required:true
    }
    
},{timestamps:true})
module.exports = mongoose.model('Todo',todoSchema)