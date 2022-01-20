const mongoose= require('mongoose')
const {Schema}= require('mongoose')

const practiceSchema= new Schema({
    name:String,
    // age:{
    //     type:Number,
    //     // require:true,
    // },
    // password:{
    //     type:String,
    //     // require:true,
    // },
    // isMember: Boolean
})

const Practice= mongoose.model('practices', practiceSchema)
module.exports={Practice, practiceSchema}