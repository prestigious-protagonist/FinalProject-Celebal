// db.js
const mongoose = require('mongoose');
const {MONGO_URL} = require("../config/server-config")
const connectDB = async () => {
  try {
    
    await mongoose.connect(MONGO_URL , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
