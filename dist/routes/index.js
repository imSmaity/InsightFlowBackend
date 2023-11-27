"use strict";

var express = require('express');
var authorize = require('../middlewares/authorize');
var _require = require('../controllers/user.controller'),
  userRegister = _require.userRegister,
  userLogin = _require.userLogin,
  userSynchronize = _require.userSynchronize;
var _require2 = require('../controllers/info.controller'),
  getInfo = _require2.getInfo;
var router = express.Router();
router.route('/user').post(userRegister);
router.route('/user/login').post(userLogin);
router.route('/user/synchronize').get(authorize, userSynchronize);
router.route('/user/info').get(getInfo);
module.exports = router;