const express = require('express');
const router = express.Router();

const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct}=require('../controllers/productController')



// router.route('/products').get(getProducts);
router.get('/products',getProducts)

router.get('/product/:id',getSingleProduct);

//router.post('/products/new').post(newProduct);
router.post('/admin/product/new',newProduct)

router.put('/admin/product/:id',updateProduct);

router.delete('/admin/product/:id',deleteProduct);






module.exports = router