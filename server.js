
// 1. Création d'un compte sur Render, le service utilisé pour l'hébergement.. https://dashboard.render.com/register
// 1. camaratidiane55@yahoo.com
// 1. OnlineEcotox123
// Installer : npm i express pg



const {Pool} = require("pg")
const pool = new Pool({
    "user": "tidiane",
    "password" : "zeSBcwnhHJXUCzKcE3SUo5eVe7FB8YIC",
    "host" : "dpg-cuqpt5l6l47c73cgsarg-a.oregon-postgres.render.com",
    "port" : 5432,
    "database" : "data_outil_ecotox_postgresql"
})



const express = require('express');
const app = express();

app.use(express.json());


const dotenv = require('dotenv');
dotenv.config();

const itemsPool = require('./DBConfig.js')


app.get('/', (req, res) => {
    res.send('Test : Simple API homepage');
})

app.get('/api/items', (req, res) => {
    res.send('Sending a list of items FROM the DB ...')
})
app.post('/api/items', (req, res) => {
    res.status(201).send('Sent the new data TO the DB ...')
})


app.get('/api/SQL_Liste_generale', async(req, res) => {
    try {
        const allItems = await itemsPool.query(
            "SELECT * FROM public.SQL_Liste_generale"
        );
        res.json({ allItems })
        console.log(res.rows)
        return allItems
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

app.listen(5070, () => {
    console.log("Test : Server running on port 5070");
})

