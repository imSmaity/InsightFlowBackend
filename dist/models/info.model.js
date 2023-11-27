"use strict";

var mongoose = require('mongoose');
var infoSchema = require('../schemas/Info');
var InfoModel = mongoose.model('info.list', infoSchema);
module.exports = InfoModel;