const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customSchema = Schema({
    firstName: {
        type:String,
        maxLength:50,
        required:false
    },
    lastName: {
        type:String,
        maxLength:50,
        required:false
    },
    phoneNo:{
        type:String,
        maxLength:15,
        required:false
    },
    email:{
        type:String,
        unique:true,
        trim: true
    },
    birthday:{
        type:String,
        required:false
    },
    accountType:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:6
    }
});

const Customer = mongoose.model("customers", customSchema);
module.exports = {Customer};