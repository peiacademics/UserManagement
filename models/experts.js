const mongoose = require("mongoose");



const expertsSchema = mongoose.Schema({
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
  
});

module.exports = mongoose.model("experts", expertsSchema);