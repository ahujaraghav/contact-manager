const mongoose = require('mongoose')

// ! Using default javascript promise
mongoose.Promise = global.Promise
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/contact-manager"

// ! Connecting to the database listening on 27107 by default
mongoose.connect(URI)
    .then(function () {
        console.log("connected to db")
    })
    .catch(function () {
        console.log("error connecting to db")
    })

module.exports = {
    mongoose
}