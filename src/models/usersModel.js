import mongoose from "mongoose"

const usersSchema = new mongoose.Schema(
    {
        firstname: {type: String, require: true},
        allname: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
    },
    {timestamps: true}
)

export const Users = mongoose.model('users', usersSchema)