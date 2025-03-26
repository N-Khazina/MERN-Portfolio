const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI; // Ensure correct casing for the environment variable

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting to database');
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;
