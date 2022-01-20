const mongoose = require("mongoose")
const {Product} = require("./models/productSchema")
const {User} = require('./models/userSchema')
const {Practice}= require('./models/practice')
const { db } = require("./models/testSchema")
const testScema = require('./models/testSchema')


const users = [
    {
        id: 22,
        name: 'rotem',
        email: "shanigmail.com"

    },
    {
        id: 18,
        name: 'daniel',
        email: "sbarapost@bgu.ac.il"

    },

]
const tirgul=[
    {
        name:'michal',
        age:29,
        password: "done",
        isMember:true


    }
]
// {
//     name: 'candy',
//     category: 'sweet',
//     amount: 3,
//     isActive: true,
//     details: {
//         phoneNumber: 542155548,
//         discount: 10

//     }
// }
const name=[ {
    name: 'matisyau',
    adress: {
        street: 'shaanan',
        city: 'yahud',
        coordinates: [2.15, 4.25]
    },
    cuisine: [
        'timtam',
        'biscoti',
        'bamba'
    ],
    kosher: true

},
{
    name: 'shani',
    adress: {
        street: 'maskin',
        city: 'beersheva',
        coordinates: [2.15, 4.25]
    },
    cuisine: [
        'cola',
        'orange',
        'sprite'
    ],
    kosher: true

},]
const products = [
    { name: "mekupelet", category: "sweet", amount: 1, isActive: true, details: {}, phoneNumber: 050220, discount: 1 },
    { name: "bamba", category: "snack", amount: 5, isActive: true, details: {}, phoneNumber: 050220, discount: 1 },
    { name: "coke", category: "drink", amount: 1, isActive: true, details: {}, phoneNumber: 050220, discount: 1 },
]




mongoose.connect("mongodb://localhost/testdb")
run()
async function run() {
    try {
        const user = await User.create(users)
        console.log(user)
    } catch (err) {
        console.log(err.message)
    }
    try {

        const response = await Product.create(products)
        console.log(response);

    } catch (err) {
        console.log(err)
    }

   try {
        const test = await testScema.create(name)
            
        console.log(test)

    } catch (err) {
        console.log(err.message)
    }
    try{
        const res= await Practice.create(tirgul)
        console.log(res)
    }catch(err){
        console.log(err.message)
    }
}
