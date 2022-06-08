const express = require('express');
const router = express.Router();

const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct, createProductReview, getProductReviews, deleteReview}=require('../controllers/productController')

const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')

// router.route('/products').get(getProducts);
router.get('/products', getProducts)  //only for checking..

router.get('/product/:id',getSingleProduct);

//router.post('/products/new').post(newProduct);
router.post('/admin/product/new',isAuthenticatedUser, authorizeRoles('admin'), newProduct)

router.put('/admin/product/:id',isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

router.delete('/admin/product/:id',isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


router.put('/review',isAuthenticatedUser,createProductReview)
router.get('/reviews',isAuthenticatedUser,getProductReviews)
router.delete('/reviews',isAuthenticatedUser,deleteReview)






module.exports = router