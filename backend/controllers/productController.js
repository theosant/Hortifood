const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const data = new Product({
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        });

        const savedData = await data.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({ message: "Falha na criação dos produtos" });
    }
};

const getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Falha ao procurar os produtos" });
    }
};

const getProductById = async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve product" });
    }
  };

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;

        const result = await Product.findByIdAndUpdate(id, product, { new: true });
        res.send(result);
    } catch (error) {
        res.status(500).json({ message: "Falha na autualização do produto" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndRemove(id);
        res.send(`Product ${product.name} deleted.`);
    } catch (error) {
        res.status(500).json({ message: "Falha ao deletar o produto" });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
