const mongoose = require("mongoose");

const connect = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.u0eil.mongodb.net/influx");
    } catch (error) {
        console.log('error:', error)
        
    }
}

module.exports =connect;