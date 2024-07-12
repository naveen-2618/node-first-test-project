const mongoose = require("mongoose");
const db_uri = 'mongodb+srv://naveentechintl:Mithra142536@cluster0.pytzqzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async() => {
  try {
    await mongoose.connect(db_uri);
    console.log("DataBase Connected")
  } catch (error) {
    console.log("Error while connecting " + error.message);
  }
}

module.exports = connectDB;