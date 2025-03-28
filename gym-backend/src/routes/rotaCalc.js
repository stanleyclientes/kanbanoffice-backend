//Importing express + import on index.js too
const express = require('express')

//Initializing Express
const router1 = express()

//Importing model 
const UserModel = require('../models/userModel')
const { default: mongoose } = require('mongoose')

//signaling that it will receive JSON
router1.use(express.json())

//Importing cors
const cors = require('cors')
router1.use(cors())

router1.get('/home', (req, res) => {
    //res.send('Sou a home 1')
    return res.json([
        {name: 'Stanley'},
        {name: 'Benjamin'}
    ])
})

function enviarDados(){
    const User = mongoose.model('UserModel')

    new User({
       
        carro: {
            cor: 'azul', 
            placa: '321'
        }

    }).save()
    .then(() => {
        console.log("Salvo com sucesso")
    })
    .catch(() => {
        console.log("Erro ao salvar")
    })
}
enviarDados()

module.exports = router1

                                                                                                                                                                                                                                                  