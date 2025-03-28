//importing mongoose
const mongoose = require('mongoose')

// Defining Model
const userSchema = new mongoose.Schema ({
    //Perimetria
    carro: {
        type: Map,
        of: String
    }    

    //Dobras Cutâneas + resultado total

    //Dobras Cutâneas Extra

    //Peso atual e idade

    //Data
})

//Put calcSchema inside CalcModel
const UserModel = mongoose.model('UserModel', userSchema)

//export
module.exports = UserModel