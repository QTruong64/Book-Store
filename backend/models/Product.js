const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        img_url: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        author: {
            type: String,
            required: true,
        },
        categories: {
            type: String,
            required: true,
        },
        bookType: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantityonhand:{
            type: Number,
            required: true,
            default: 20,
        }
    },
    {   timestamps: true  }
);

module.exports = mongoose.model("Product", ProductSchema);
