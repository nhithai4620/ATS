var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
var User = require('../models/user');

router.get("/profile",userController.profile);

module.exports = router;