import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
    },
}, {
    timestamps: true, // This gives us createdAt, updatedAt
});

const Product = mongoose.model("Product", productSchema);//This table will be changed to products in the mongodb database

export default Product;