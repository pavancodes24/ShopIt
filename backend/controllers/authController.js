const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    
    const { name, email, password } = req.body;
    
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "avatars/kccvibpsuiusmwfepb3m",
        url: "https://res.cloudinary.com/shopit/image/upload/v1606305757/avatars/kccvibpsuiusmwfepb3m.png",
      },
    });
  
//   const token = user.getJwtToken();

//     res.status(201).json({
//         success: true,
//         token
//     })
    sendToken(user,200,res)

})


// Login user => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    // console.log(req.body,'reqbody')
    const { email, password } = req.body;
  
    // checks if email and password is entered by the user
    if (!email || !password) {
      return next(new ErrorHandler("Please enter email and password", 400));
    }
  
    // Finding user in the database
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    sendToken(user, 200, res);
  });
  

// Logout user => /api/v1/logout
exports.logout = catchAsyncErrors(async(req, res, next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: 'logged out'
    })
})