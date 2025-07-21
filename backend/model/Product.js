const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: String,
        des: String,
        price: Number,
        image: String
    }
)

module.exports = mongoose.model("Product", productSchema)