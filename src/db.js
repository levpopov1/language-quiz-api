// database connetion setup
const mongoose = require('mongoose');

const connectDB = async function(){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
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