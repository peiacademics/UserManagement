const mongoose = require("mongoose");



const studentsSchema = mongoose.Schema({
  FirstName: String,
  MiddleName:String,
  LastName:String,
  UserName: String,
  Password:String,
  PrimaryEmailID: String,
  AlternateEmailID:String,
  PrimaryPhoneNumber: String,
  SecondaryPhoneNumber:String,
  Address: String,
  City:String,
  Pincode:String,
  State:String,
  Country:String,
  CreatedDate:Date,
  dob: Date,
  ExamName:String,
  ExamYear:String,
  RegisteredWithUs:String
  
});

module.exports = mongoose.model("students", studentsSchema);