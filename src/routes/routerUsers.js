import express from 'express'
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended: true}))

import cors from 'cors'
router.use(cors())

import argon2 from 'argon2'
import { Users } from '../models/usersModel.js'

import jwt from 'jsonwebtoken'

// GET user by id
router.get('/users/get/:userid', async (req, res) => {
    try {
        const userId = req.params.id
        const user = await Users.findById(userId)

        if (!user) {
            return res.status(401).json({message: 'Usuário não encontrado'})
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send('Erro no servidor' + error.message)
    }
})

// GET user by username + put in url
router.get('/users/get/:username', async (req, res) => {
    try {
        const username = req.params.username
        const user = await Users.findOne({username})

        if (!user) {
            return res.status(401).json({message: 'Usuário não encontrado'})
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send('Erro no servidor' + error.message)
    }
})

// POST - create user
router.post('/users/post', async (req, res) => {
    try {
        const {firstname, allname, email, password} = req.body

        // Verify if user exist
        const existingUser = await Users.findOne({email})
        if (existingUser) {
            return res.status(400).json({message: 'usuário ja existe'})
        }

        // Hash password with Argon2
        const hashedPassword = await argon2.hash(password)

        // Create user on MongoDB
        const newUser = new Users({
            firstname,
            allname,
            email,
            password: hashedPassword
        })
        await newUser.save()

        return res.status(200).json({message: 'Usuário criado com sucesso', user: newUser})
    } catch (error) {
        return res.status(500).json({message: 'Falha ao criar usuário', error: error.message})
    }
})

// POST - Login
router.post('/users/login', async (req, res) => {
    try {
        const {email, password} = req.body

        // Verify if user exist
        const existingUser = await Users.findOne({email})
        if (!existingUser) {
            return res.status(401).json({message: 'usuário não encontrado'})
        }

        // Verify password with Argon2
        const isPasswordValid = await argon2.verify(existingUser.password, password)
        if (!isPasswordValid) {
            return res.status(400).json({message: 'Senha incorreta'})
        }

        // Monta os dados do usuário para enviar ao frontend
        const userData = {
            _id: existingUser._id,
            firstname: existingUser.firstname,
            allname: existingUser.allname,
            email: existingUser.email,
        };

        // Create token with JWT
        const secretKey = 'chave1995'
        const token = jwt.sign({email, isPasswordValid}, secretKey, {expiresIn: '100h'})

        //Return response with token
        return res.json({auth: true, token, user: userData})
    } catch (error) {
        console.error('Erro no login:', error); // Log detalhado do erro
        return res.status(500).json({message: 'Erro ao fazer login', error: error.message})
    }
})

export default router