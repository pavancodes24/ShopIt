const Product = require('../models/product')

//create a new product => /api/v1/admin/products/new
exports.newProduct = async (req, res, next) =>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}
//get all products => /api/v1/products
exports.getProducts = async (req,res,next)=>{
    const products = await Product.find();
    res.status(200).json({
        success: true,
        // message: 'this route will show all the products in database'
        count: products.length,
        products
    })
}

//get single product details => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}

//update product => /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) =>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true
    })
    res.status(200).json({
        success:true,
        product
    })
}
//delete product  => /api/v1/admin/product/:id
// exports.deleteProduct = async (req, res, next) =>{
//     const product = await Product.findById(req.params.id);
//     if(!product){
//         return res.status(404).json({
//             success: false,
//             message: 'Product not found'
//         })
//     }

//     await product.deleteOne();

//     res.status(200).json({
//         success: true,
//         message: 'Product deleted successfully'
//     })
// }

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product is deleted.",
    });

}
