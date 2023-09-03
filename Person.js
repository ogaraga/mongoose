const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');


var personSchema = mongoose.Schema({
        name:{
        type: String,
        uppercase: true,
        require: true,
        minLength: 5,
        maxLength: 50,
        unique:true
        
       },
    email:{
        type: String,
        require: true,
        lowercase: true,
        minLength: 5,
        maxLength: 50,
        unique: true 
    },   
    age: {
        type: Number,
        min: 18,
        max: 70,
        require: true
    },
    favoriteFood: {
        type: [String],
        require: true    
    }
    
}) 
const Person = mongoose.model('Person', personSchema);
module.exports = Person;