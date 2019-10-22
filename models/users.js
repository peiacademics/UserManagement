const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const e_learningPortalPermissionsSchema = require("../e_learningPortalPermissions").schema;

const usersSchema = new Schema({
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
  userType: {
    type: String
  },
  
  e_learningPortalPermissions: [e_learningPortalPermissionsSchema]
});

const Users = mongoose.model("users", usersSchema);
module.exports = { model: Users, schema: usersSchema };
