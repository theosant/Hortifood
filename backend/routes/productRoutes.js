const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create product
router.post('/', productController.createProduct);

// Get a list of products
router.get('/', productController.getProducts);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Update product by ID
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;