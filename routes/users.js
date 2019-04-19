var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
/* GET users listing. */
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup)
router.get('/profile', userController.profile);
module.exports = router;
