const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '59537ead3531255561c1a361';

if(ObjectID.isValid(id)){
    User.findById(id).then((todos) =>{
    if(!todos){
        return console.log('ID not found')
    }
    console.log(todos)
}).catch((e)=>console.log(e))
}else{
    console.log("ID not valid")
}


// User.findById(id).then((todos) =>{
//     if(!todos){
//         return console.log('ID not found')
//     }
//     console.log(todos)
// }).catch((e)=>console.log(e))

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log(todos)
// });

// Todo.findOne({
//     _id:id
// }).then((todos) => {
//     console.log(todos)
// });

// Todo.findById(id).then((todos) =>{
//     if(!todos){
//         return console.log('ID not found')
//     }
//     console.log(todos)
// }).catch((e)=>console.log(e))