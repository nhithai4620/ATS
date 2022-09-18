var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

const {verifyToken} = require("../controllers/verifyToken");

router.get("/profile",verifyToken,userController.profile);

module.exports = router;