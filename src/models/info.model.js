const mongoose = require('mongoose');
const infoSchema = require('../schemas/Info');

const InfoModel = mongoose.model('info.list', infoSchema);

module.exports = InfoModel;
