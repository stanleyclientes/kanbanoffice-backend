//Importing dotenv
const dotenv = require('dotenv')
dotenv.config()

//Conecting MongoDB
const connectMongoDBWithMongoose = require('./src/database/connectMongoDBWithMongoose')
connectMongoDBWithMongoose()

//importing express
const express = require('express')
const app = express()

//signaling that it will receive JSON
app.use(express.json())

//Importing cors
const cors = require('cors')
app.use(cors())

//EJS
app.set("view engine", "ejs")
app.set("views", "src/views")

// //enviando a view
// app.get('/views', async (req, res) => {
//     const users = await UserModel.find({});
//     res.render("index", {users} );
// })

//Importing routes
require('./src/routes/rotaCalc')
const routerCalc = require('./src/routes/rotaCalc')
const UserModel = require('./src/models/userModel')
app.use('/', routerCalc)

//defining port
const port = process.env.PORT || 8080

//Function that will be executed when the server comes online
app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))