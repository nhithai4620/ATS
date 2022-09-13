var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();
var User = require('../models/user');

router.post("/register",authController.register);

router.post("/login",authController.login);

router.get("/profile",authController.profile);

router.get("/", authController.getAllUsers);

module.exports = router;