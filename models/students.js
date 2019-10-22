const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentsSchema = new Schema({
  name: { 
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  contact: { 
    type: [String]
  },
  address: {
    type: String
  },
  dob: {
    type: Date
  },
  studentType: {
    type: String
  }
  
});

const Students = mongoose.model("students", studentsSchema);
module.exports = { model: Students, schema: studentsSchema };
