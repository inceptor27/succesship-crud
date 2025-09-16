const express = require("express")
const app = express()
const route = require('./routes/router')

app.use(express.json())
app.use('/api/products/', route)

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sabaregirivasan_db_user:GjscPhb8Aatg65MO@cluster0.lez22t3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(5000, () => {
        console.log("server is listening on the port 5000..")
    })
    console.log("connected")
})

