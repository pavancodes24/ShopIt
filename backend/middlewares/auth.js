const User = require("../models/user");

const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require("./catchAsyncErrors");

//check if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{

    const {token} = req.cookies;
    // console.log(token);

    if(!token){
        return next(new ErrorHandler('Login first to access the resource',401));
    }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decoded,'decoded');
        // console.log(req.user,'before requser')
        req.user=await User.findById(decoded.id)
        // console.log(req.user,'requser');
        next();
    

});

// Handling user roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
            new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403))
        }
        next()
    }
}
