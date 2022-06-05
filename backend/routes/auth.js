const express = require('express');
const router = express.Router();

const {registerUser,loginUser, logout,forgotPassword} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/password/forgot', forgotPassword);

router.get('/logout',logout);


module.exports = router;