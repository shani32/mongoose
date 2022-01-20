const express = require('express')
// require('./script')
const mongoose = require("mongoose")
const { Product } = require("./models/productSchema")
const { User } = require('./models/userSchema')
const { Practice } = require('./models/practice')
const userRouter = require('./Routes/userRouter')
const productRouter = require('./Routes/productsRouter')





mongoose.connect("mongodb://localhost/testdb")
const app = express()
const port = 3000
app.use(express.json())
app.use("/users", userRouter);
app.use("/products", productRouter)
// app.post('/users', 
// const createUser= async (req, res) => {
//     try {
//         const user  = req.body
//         const newUser = await new User(user)
//         await newUser.save()
//         res.status(200).send(newUser)
//     } catch (err) {
//         res.status(400).send(err.message)
//     }

// }
// app.post('/products', 

// const createProduct= async (req, res) => {
//     try {
//         const { product } = req.body
//         const newProduct = await new Product(product)
//         await newProduct.save()
//         res.status(200).send(newProduct)
//     } catch (err) {
//         res.status(400).send(err)
//     }

// }

// app.get('/users', 
// const getUsers= async (req, res) => {
//     try {
//         const users = await User.find()
//         res.send(users)
//     } catch (err) {
//         res.status(500).send()
//     }
// }
// app.get('/users/:id',
// const getUser= async (req, res) => {
//     const _id = req.params.id
//     try {

//         const user = await User.findById(_id)
//         if (!user) {
//             return res.status(400).send()
//         }
//         res.send(user)
//     } catch (err) {
//         res.status(500).send()
//     }
// }

// app.get('/products', 
// const getProducts= async (req, res) => {
//     try {
//         const products = await Product.find()
//         res.send(products)
//     } catch (err) {
//         res.status(500).send(err)
//     }

// }
// app.put('/users/:id',
// const updateUser= async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name }}, { new: true }
//         )
//         res.send(user)
//     } catch (err) {
//         res.status(500).res.send()
//     }
// }
// app.put('/products/:id', 
// const updateProduct= async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name, category:req.body.category}}, { new: true }
//         )
//         res.send(product)
//     } catch (err) {
//         res.status(500).res.send()
//     }
// }
// app.delete('/users/:id', 
// const deleteUser= async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)//do we need to add parameter
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (err) {
//         res.status(500).res.send()
//     }
// }
// app.delete('/users', 
// const deleteAllUsers= async (req, res) => {
//     try {
//         const user = await User.deleteMany({})
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (err) {
//         res.status(500).res.send()
//     }
// }

app.listen(port, () => {
    console.log('server is up in the air' + port)
})