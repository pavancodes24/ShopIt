const express = require('express');
const router = express.Router();

const {registerUser,loginUser, logout,forgotPassword, resetPassword} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword)

router.get('/logout',logout);


module.exports = router;