// database connetion setup
const mongoose = require('mongoose');

const connectDB = async function(){
    let connectionString = '';
    if(process.env.NODE_ENV === "development"){
        connectionString = process.env.MONGO_DEV_URI;
    }
    else{
        connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`
    }
    try {
        const conn = await mongoose.connect(connectionString, {
            useNewUrlParser: true, 
            useFindAndModify : false, 
            useUnifiedTopology: true
        });
        console.log("MongoDB connetcion successful");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;