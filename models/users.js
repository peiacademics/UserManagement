const mongoose = require("mongoose");


// const e_learningPortalPermissionsSchema = require("../e_learningPortalPermissions").schema;

const usersSchema = mongoose.Schema({
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
  userType:String,
  
//   e_learningPortalPermissions: [e_learningPortalPermissionsSchema]
},{
    timestamps: true
});


module.exports = mongoose.model("users", usersSchema);