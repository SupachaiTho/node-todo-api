// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connect to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5953697dbca5d65a1d07a0d5')
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res)=>{
    //     console.log(res)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59536f6ebca5d65a1d07a0d6')
    }, {
        $set:{
            name: 'Jane'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }).then((res)=>{
        console.log(res)
    })

    
    // db.close();
});