const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    categoryNamee:{
        type:String,
        required:true, 
        unique:true
    },
    description:{
        type:String,
        required:false
    },
    createdDate:{
        type:Date,
        required:true,
        default:Data.now
    }
})  
module.exports=mongoose.model('Category',categorySchema)