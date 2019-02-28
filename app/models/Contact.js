// - We dont import mongoose, we create a new mongoose instance
const mongoose = require('mongoose')

// ! Getting the schema
const Schema = mongoose.Schema

// ! Making our own Schema
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        // - Default for required is false
        type: String,
    },
    mobile: {
        type: String,
        minlength: 10,
        maxlength: 10
    }
})

// ! Getting OCF to create objects
const Contact = mongoose.model('Contact', contactSchema)

module.exports = {Contact, mongoose1:mongoose}