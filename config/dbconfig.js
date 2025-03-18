const mongoose = require ('mongoose');
const mongoURL = process.env.mongo_url

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error',()=>{
    
    console.log('Error connecting to database');
});

connection.on('connected',()=>{
    
    console.log('mondoDB connection successful');
});

module.exports = mongoose;