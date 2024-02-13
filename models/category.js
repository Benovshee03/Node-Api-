const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    categoryNamee:{
        type:String,
        required:true, 
        unique:true
    }
})