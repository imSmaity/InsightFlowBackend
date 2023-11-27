"use strict";

var mongoose = require('mongoose');
var userSchema = require('../schemas/User');
var UserModel = mongoose.model('user.list', userSchema);
module.exports = UserModel;