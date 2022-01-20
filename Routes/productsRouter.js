const express= require ("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/controller");
const productRouter = express.Router()

productRouter.get('/',getProducts);
productRouter.put('/:id',updateProduct);
productRouter.post('/',createProduct);
productRouter.post('/:id',deleteProduct);

module.exports = productRouter