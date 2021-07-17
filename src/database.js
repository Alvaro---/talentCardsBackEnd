const mongoose=require ('mongoose');

const MongoClient = require('mongodb').MongoClient;

//direccion base

const URI=process.env.MONGODB_URL 
? process.env.MONGODB_URL 
: 'mongodb://localhost/talent_cards'; 

const msg_init_db="***** DB Iniciada en "+URI;

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log(msg_init_db);
})