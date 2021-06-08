const mongoose=require ('mongoose');

const MongoClient = require('mongodb').MongoClient;

//direccion base
/*
const URI=process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/talent_cards'; */

const URI = "mongodb+srv://alvaroMercado:Alvaro92.1@cluster0.0ozgp.mongodb.net/talent_cards?retryWrites=true&w=majority";
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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