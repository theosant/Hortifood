const Purchase = require('../models/purchase');

// Criar uma nova compra
exports.createPurchase = async (req, res) => {
  try {
    const { userID, items, price, date, CEP } = req.body;

    const purchase = new Purchase({
      userID,
      items,
      price,
      date,
      CEP
    });

    const newPurchase = await purchase.save();

    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter todas as compras
exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();

    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter uma compra pelo ID
exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);

    if (!purchase) {
      return res.status(404).json({ message: 'Compra não encontrada' });
    }

    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};