// Importing and initializing dotenv
import dotenv from "dotenv"
dotenv.config();

// Importing an connecting MongoDB
import mongodb from "./src/database/mongodb.js"
mongodb();

// Importing Cors
import cors from "cors"

// Importing express
import express from "express"
import morgan from "morgan" // mostra tipo e tempo das requisições
const app = express()

app.use(cors())
app.use(express.json()) // sinaliza que receberá json
app.use(morgan('dev')) 

// Habilita CORS para permitir requisições do Next.js
const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.247.104:3000'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};


// ROUTERS 
import routerBoards from "./src/routes/routerBoards.js";
app.use("/", routerBoards)

import routerUsers from "./src/routes/routerUsers.js"
app.use("/", routerUsers)

import routerLists from "./src/routes/routerLists.js";
app.use("/", routerLists)

import routerCards from "./src/routes/routerCards.js";
app.use("/", routerCards)

// Port
const port = 8080
app.listen(port, '0.0.0.0', () => console.log(`Rodando com express na porta ${port}`))