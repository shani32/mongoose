const mongoose = require('mongoose')
const { Practice } = require('./practice')
const validator = require("validator")

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: { type: Number, require: true, min: 1 },
    isActive: Boolean,
    details: {
        description: { type: String, minlength: 10 },
        date: { type: Date, default: Date.now(), required: true },
        phoneNumber: {
            type: String, require: true,
            validate: function (value) {
                return value && validator.isMobilePhone(value, 'he-IL')

            },
        },
        discount: { type: Number, default: 0 },
        images: { type: Array, require: true },
        other: [Practice.schema],
    }


})

const Product = mongoose.model('products', productSchema)


module.exports = { Product }