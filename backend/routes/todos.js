const express = require('express');
const {getTodo,createTodo,deleteTodo,updateTodo} = require('../controllers/TodoController');

const router = express.Router();
//Get todo
router.get('/:id',getTodo);

//Create a new todo 
 router.post('/',createTodo);

 //Delete a todo 
  router.delete('/:id',deleteTodo);

  //update a todo 
  router.patch ('/:id',updateTodo);


  module.exports = router;
