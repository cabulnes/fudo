const mongoose = require('mongoose');
const config = require('../config/db');

// Property Schema, as per the master file
const PropertySchema = mongoose.Schema ({
  DATE: {
    type: String,
    required: true
  },
  DISTRESS: {
    type: String,
    required: true
  },
  'FIRST NAME': {
    type: String,
    required: true
  },
  'LAST NAME': {
    type: String,
    required: true
  },
  'MAILING ADDRESS': {
    type: String,
    required: true
  },
  'MAILING CITY': {
    type: String,
    required: true
  },
  'MAILING STATE': {
    type: String,
    required: true
  },
  'MAILING ZIP': {
    type: String,
    required: true
  },
  'PROPERTY ADDRESS': {
    type: String,
    required: true
  },
  'PROPERTY CITY': {
    type: String,
    required: true
  },
  'PROPERTY STATE': {
    type: String,
    required: true
  },
  'PROPERTY ZIP': {
    type: String,
    required: true
  },
  'PHONE 1': {
    type: String,
    required: true
  },
  'PHONE 2': {
    type: String
  },
  'PHONE 3': {
    type: String
  },
  'PHONE 4': {
    type: String
  },
  'PHONE 5': {
    type: String
  },
});

const Property = module.exports = mongoose.model('Property', PropertySchema);

module.exports.getPropertyById = function(id, callback) {
  Property.findById(id, callback);
}

//module.exports.getUserByUsername = function(username, callback) {
//  const query = {username: username}
//  User.findOne(query, callback);
//}

//module.exports.addUser = function(newUser, callback) {
//  bcrypt.genSalt(10, (err, salt) => {
//    bcrypt.hash(newUser.password, salt, (err, hash) => {
//      if(err) throw err;
//      newUser.password = hash;
//      newUser.save(callback);
//    });
//  });
//}

//module.exports.comparePassword = function(candidatePassword, hash, callback) {
//  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//    if(err) throw err;
//    callback(null, isMatch);
//  });
//}
