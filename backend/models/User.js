const  mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {required:true, type:String},
    lastName: {required:true, type:String},
    userName: {required:true, type:String},
    email: {required:true, type:String},
    birthday: {required:false, type:Date},
})

module.exports = mongoose.model('User',UserSchema)