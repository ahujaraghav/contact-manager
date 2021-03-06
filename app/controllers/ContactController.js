// - express is loaded once in ram from index.js and its very fast next time we require it
const express = require('express')
// - new router instance each time.
const router = express.Router()
const  {Contact} = require('../models/Contact')

// ? Inserting a record in the database
router.post('/', function (req, res) {
    const contact = new Contact(req.body)
    contact.save()
        .then(function (contact) {
            res.send(contact)
        })
        .catch(function (err) {
            res.send(err)
        })

})

// ? Getting all records from the database
router.get('/', function (req, res) {
    Contact.find()
        .then(function (contacts) {
            res.send(contacts)
        })
        .catch(function (err) {
            res.send(err)
        })
})

// ? Getting 1 record from the database by id
router.get('/:id', function (req, res) {
    const id = req.params.id
    // - Contact wont find the document after fetching all the records from mongo
    // - Mongo will do the operation of finding and return us the document
    // - in real world there are millions of records in the db, if it is dont in server it will use hell lot of ram.

    // - matches field _id generated by mongo
    Contact.findById(id)
        .then(function (contact) {
            // ! If a valid mongo id is passed and record is not found, still promise will pass
            if (contact) {
                res.send(contact)
            }
            else {
                res.send({})
            }
        })
        .catch(function (err) {
            // ! If a invalid mongo id is passed promise will fail
            res.send("erro")
        })
})

// ? Find by id and delete
// - return deleted data
router.delete('/:id', function(req, res){
    Contact.findByIdAndDelete(req.params.id)
    .then(function(contact){
        res.send(contact)
    })
    .catch(function(err){
        res.send(err)
    })
})

// ? Find by id and update
// - $set is like Object.assign
// - new:true, returns the update value in .then, else old value is returned
// - runValidators:true, runs validations on the new data, if we dont pass this, no validations are made on the data
router.put('/:id', function(req, res){
    Contact.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true, runValidators:true})
    .then(function(contact){
        res.send(contact)
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = {
    contactRouter : router,
    express1 : express
}

