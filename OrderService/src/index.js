const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const router = require('./routes/index')
const { PORT } = require("./config/server-config")
app.use('/orderService/api', router)
app.get('/', (req, res) =>{
    res.send("OrderService...")
})
app.listen(PORT, ()=>{
    console.log("Server listening on port 3006")
})