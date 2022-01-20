const mongoose= require('mongoose')
const { stringify } = require('querystring')

const testScema= new mongoose.Schema({
    name:String,
    adress:{
        street:String,
        city:String,
        coordinates: [Number]

    },
    
    
    cuisine:[String],
    kosher:Boolean,
    reviews:{},
})
module.exports=mongoose.model('tesySchema', testScema)