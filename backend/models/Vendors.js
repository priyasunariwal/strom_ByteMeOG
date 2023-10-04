const mongoose = require('mongoose');

const { Schema } = mongoose;
const VUsers = new mongoose.Schema({
    vname: {
        type: String,
        required: true
    },
    vusername: {
        type: String,
        required: true

    },
    vemail: {
        type: String,
        required: true,
       
    },
    vphone: {
        type: Number,
        
    },
    vdob: {
        type: Date,
        
    },
    vgender:{
        type: String,
        
    },
     vpassword:{
        type: String,
        required: true
    }
  });
  
  const VenUsers = mongoose.model('VenUsers',VUsers);

  module.exports = VenUsers;