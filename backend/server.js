const app = require("./app");
const connectDatabase = require('./config/database')
const cloudinary = require("cloudinary");


const dotenv = require('dotenv');


// Handle the uncaught exceptions
process.on('uncaughtException',err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down due to uncaught exception')
    process.exit(1);
})

//setting up config file
dotenv.config({path: 'backend/config/config.env'})

// console.log(a) for the uncaught exceptions which should be above the console.log

//connecting to database
connectDatabase();

// setting up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

//Handle Unhandled Promise exceptions
process.on('unhandledRejection', err=>{
    console.log(`Error: ${err.message}`)
    console.log('shutting down the server due to unhandled Promise rejection')
    server.close(()=>{
        process.exit(1);
    })
})