import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products, message: "Products get successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; // This is a route that will be used to get all products from the database

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById({ id });
        res.status(200).json({ product, message: "Product gets successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; // This is a route that will be used to get all products from the database

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate({ id }, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById({ id });
        res.status(200).json({ updatedProduct, message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete({ id });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product, message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export {getProducts, getProduct, updateProduct, deleteProduct, createProduct};
