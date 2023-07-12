const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Rota para criar uma nova compra
router.post('/purchase', purchaseController.createPurchase);

// Rota para obter todas as compras
router.get('/purchases', purchaseController.getAllPurchases);

// Rota para obter uma compra pelo ID
router.get('/purchase/:id', purchaseController.getPurchaseById);

// Rota para obter as compras de um usuário específico
router.get('/users/:userId/purchases', purchaseController.getPurchasesByUserId);

module.exports = router;