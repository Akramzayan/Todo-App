const Todo = require('../models/todoModel');
const mongoose=require('mongoose');

//Get todo

const getTodo =async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'There is No tODO with that id'})
    }
    const todo = await Todo.findById(id)
    if( !todo){
        return res.status(404).json({error:'There is No tODO with that id'})
    }
    res.status(200).json(todo)
}

//Create  a New Todo 

 const createTodo = async (req,res) => {
   const {task,Priority,InProgress} = req.body;
   let emptyFields =[]
   if (!task) {
    emptyFields.push('task')
   }
   if(!Priority){
    emptyFields.push('Priority');

   }
   if(!InProgress){
    emptyFields.push('InProgress');
   }
   //Add todo to Db 
   try {
    const todo = await Todo.create({task,Priority,InProgress});
    res.status(200).json(todo);
   }
   catch(err){
    res.status(400).json({error: error.message})
   }
 }
 //Delete a TODO 

    const deleteTodo = async(req,res)=> {
        const {id} =req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status (404).json({error:'No Todo with that id'})
        }
        const todo = await Todo.findOneAndDelete({_id: id})
        if(!todo){
            return res.status(404).json({error:'No Todo with that id'})
        }
        res.status(200).json(todo)
    }

//Update a Todo
const updateTodo = async (req,res) => {
    const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No Todo with that id'})
  }
  const todo = await Todo.findOneAndUpdate(({_id: id},{
    ...req.body
  }))
  if(!todo){
    res.status(404).json({error:"There is no Todo "})
  }
  res.status(200).json(todo);

}
module.exports ={
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo
}
