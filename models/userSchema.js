const mongoose = require('mongoose')
const { Schema } = require("mongoose")
const validator = require('validator')

const userSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function (value) {
            return validator.isEmail(value)
        }

    }

})

const User = mongoose.model('users', userSchema)
module.exports = { User}