const mongoose = require('mongoose');

const usernameSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 'Enter a product name'
    },
    password: {
        type: string,
        required: true, "Enter a password"
    },
    email: {
        type: String,
        required: true, "Enter your email address"
    },
    First Name: {
        type: String,
        required: true, "Enter your First Name"
    },
    Last Name: {
        type: String,
        required: true, "Enter your Last Name"
    },
    Shipping Address: {
        type: String, 
        required: true, "Enter you shipping address"
    },
    Billing Address: {
        type: String,
        required: false,
        
    },
});
module.exports = mongoose.model('Username', productSchema);

