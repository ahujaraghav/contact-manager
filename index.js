// ! Mongoose and mongodb
const express = require('express')
const app = express()
// ! ./ means current folder

// ! our mongoose object is not used anywhere, when we require it database.js file is executed which connect's mongoose to db
const {mongoose} = require('./config/database')
const {contactRouter} = require('./app/controllers/ContactController')
const {noteRouter} = require('./app/controllers/NoteController')

const {mongoose1} = require('./app/models/Contact')
const {express1} = require('./app/controllers/ContactController')

console.log(mongoose == mongoose1) // true, same instance of mongoose
console.log(express == express1) // true, same instance of express

const port = process.env.PORT || 3005

app.get('/', function (req, res){
    res.send("Welcome to contact manager")
})

app.use(express.json())
app.use('/contacts', contactRouter)
app.use('/notes', noteRouter)


app.listen(port, function () {
    console.log("listening on port " + port)
})