// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connect to MongoDB server');

    // db.collection('Todos').deleteMany({text:'Something to do'}).then((res)=>{
    //     console.log(res);
    // })

    // db.collection('Todos').deleteOne({text:'Something to do'}).then((res)=>{
    //     console.log(res);
    // })

    // db.collection('Todos').findOneAndDelete({text:'Something to do'}).then((res)=>{
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5953667db365b754265f3530')}).then((res)=>{
        console.log(res);
    })

    // db.close();
});