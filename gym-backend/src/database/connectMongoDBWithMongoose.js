//Conecting MongoDB with Mongoose
//Importing mongoose
const mongoose = require('mongoose')

//Conecting MongoDB to Mongoose
const connectingToMongoDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@gym.pdslmkj.mongodb.net/?retryWrites=true&w=majority`, {
}).then(() => {
    console.log('Conectado ao MongoDB')
}).catch((error) => {
    console.log('Erro ao conectar-se ao MongoDB' + error)
})
}

module.exports = connectingToMongoDB