const mongoose = require('mongoose');

const { Schema } = mongoose;
const OUsers = new mongoose.Schema({
    oname: {
        type: String,
        required: true
    },
    ousername: {
        type: String,
        required: true

    },
    oemail: {
        type: String,
        required: true,
       
    },
    ophone: {
        type: Number,
        
    },
    odob: {
        type: Date,
        
    },
    ogender:{
        type: String,
        
    },
     opassword:{
        type: String,
        required: true
    }
  });
  
  const OrgUsers = mongoose.model('OrgUsers',OUsers);

  module.exports = OrgUsers;

