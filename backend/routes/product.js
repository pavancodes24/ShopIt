const express = require('express');
const router = express.Router();

const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct}=require('../controllers/productController')

const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')

// router.route('/products').get(getProducts);
router.get('/products',isAuthenticatedUser,authorizeRoles('admin'), getProducts)  //only for checking..

router.get('/product/:id',getSingleProduct);

//router.post('/products/new').post(newProduct);
router.post('/admin/product/new',isAuthenticatedUser, authorizeRoles('admin'), newProduct)

router.put('/admin/product/:id',isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

router.delete('/admin/product/:id',isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);






module.exports = router