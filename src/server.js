const express = require('express');
const User = require('./models/index.js');
const app = express();

app.use(express.json());

app.get('/', async (req, res)=>{
    try {
        const dados = await User.findAll();
        res.json(dados);

    } catch (error) {
        return res.send(error);
    }
})

app.listen(3000)