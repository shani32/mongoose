const express = require('express')
const { User } = require('../models/userSchema')
const { Product } = require('../models/productSchema')
const { Practice } = require('../models/practice')


const createUser = async (req, res) => {
    try {
        const user = req.body
        const newUser = await new User(user)
        await newUser.save()
        res.status(200).send(newUser)
    } catch (err) {
        res.status(400).send(err.message)
    }

}
const createProduct = async (req, res) => {
    try {
        const { product } = req.body
        const newProduct = new Product(product)
        await newProduct.save()
        res.status(200).send(newProduct)
    } catch (err) {
        res.status(400).send(err)
    }

}
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(500).send()
    }
}
const getUser = async (req, res) => {
    const _id = req.params.id
    try {

        const user = await User.findById(_id)
        if (!user) {
            return res.status(400).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send()
    }
}
const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.send(products)
    } catch (err) {
        res.status(500).send(err)
    }

}
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, { new: true }
        )
        res.send(user)
    } catch (err) {
        res.status(500).res.send()
    }
}
const updateProduct= async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name, category:req.body.category}}, { new: true }
        )
        res.send(product)
    } catch (err) {
        res.status(500).res.send()
    }
}
const deleteUser= async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)//do we need to add parameter
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).res.send()
    }
}
const deleteAllUsers= async (req, res) => {
    try {
        const user = await User.deleteMany({})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).res.send()
    }
}
//the only function not deleting
const deleteProduct= async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (err) {
        res.status(500).res.send()
    }
}

module.exports = {
    createUser, createProduct, getUsers, getUser, getProducts, updateUser, updateProduct, deleteUser, deleteAllUsers, deleteProduct
}