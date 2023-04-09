const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 'Enter a product name'
    },
    price: {
        type: Number,
        required: true, "Enter a product price"
    },
    description: {
        type: String,
        required: true, "Enter a product description"
    },
    category: {
        type: String,
        required: true, "Enter a product category"
    },
    image: {
        type: String,
        required: true, "Enter a product image"
        
    },
});
module.exports = mongoose.model('Product', productSchema);



// Path: product.js
// Compare this snippet from app.js:
