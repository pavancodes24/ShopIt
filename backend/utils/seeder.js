const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')

const products = require('../data/products')

//setting the dotenv file path
dotenv.config({path:'backend/config/config.env'})
connectDatabase();

const seedProducts = async ()=>{
    try{
        await Product.deleteMany();
        console.log('Product deleted successfully');

        await Product.insertMany(products)
        console.log('All Products inserted successfully');

        process.exit();
    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedProducts()

 