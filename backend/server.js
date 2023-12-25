require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const TodoRouter = require('./routes/todos');
const cors = require('cors');

//const cors =require('cors')
//Express app  creation
const app = express();
//Middleware
app.use(cors({origin:['http://localhost:3000'],credentials:true}));
app.use(express.json());

app.use((req,res ,next) => {
    console.log(req.path,req.method);
    next();
})

//Routes
app.use('/todos',TodoRouter);
//Connect to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    //Listen for requests
    app.listen(process.env.PORT,() => {
        console.log('Connected to DB & listening on port',process.env.PORT);
    });
})
.catch((err) => {
    console.log(err);
})