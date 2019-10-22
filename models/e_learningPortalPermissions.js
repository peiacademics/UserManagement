const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const e_learningPortalPermissionsSchema = new Schema({
  courseMgmt: { 
    type: Boolean
    enum: ['C','R','U','D']
  },  
  ordersMgmt: {
    type: Boolean
    enum: ['C','R','U','D']
  },
  kDomainMgmt: {
    type: Boolean
    enum: ['C','R','U','D']
  },
  studentsMgmt: {
    type: Boolean
    enum: ['C','R','U','D']
  },
  professorMgmt: {
    type: Boolean
    enum: ['C','R','U','D']
  }
});

const E_learningPortalPermissions = mongoose.model("e_learningPortalPermissions", e_learningPortalPermissionsSchema);
module.exports = { model: E_learningPortalPermissions, schema: e_learningPortalPermissionsSchema };
