const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })


Todo.findByIdAndRemove('595490955098d398f26d2f25').then((todo)=>{
    console.log(todo);
})