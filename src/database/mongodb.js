// Importando mongoose
import mongoose from 'mongoose'

// Connecting MongoDB to Mongoose
const mongodb = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@saas.du44abf.mongodb.net/KANBANOFFICE`, { 
    }).then(() => {
        console.log('Conected to MongoDB')
    }).catch((error) => {
        console.log('Failed to connect to MongoDB')
    })
}

export default mongodb