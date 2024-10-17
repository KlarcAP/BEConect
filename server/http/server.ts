require('dotenv').config();
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(8080, () =>{
    console.log('Server running on http://localhost:8080/')
})
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Nem vindo a nossa API!'})
})

app.post('/auth/register', async(req, res) => {
    const { username, email, password, confirmpassword } = req.body;

    if (!username){
        return res.status(422).json({ msg: 'Nome é obrigatório!' });
    }

})

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8x3vu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
        app.listen(3333)
        console.log("Conectou ao banco!")
    })
    .catch((err) => console.log(err))

app.listen(3333)
