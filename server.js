
// 1. Création d'un compte sur Render, le service utilisé pour l'hébergement.. https://dashboard.render.com/register
// 1. camaratidiane55@yahoo.com
// 1. OnlineEcotox123
// Installer : npm i express pg



const {Pool} = require("pg")



const express = require('express');
const app = express();

app.use(express.json());


const dotenv = require('dotenv');
dotenv.config();

const itemsPool = require('./DBConfig.js')

app.get("/", (req, res) => res.sendFile(__dirname + '/pages/dashboards/index.html'))
app.get('/', (req, res) => {
    res.send('Test : OUTIL ECOTOX12 : Simple API homepage');
})


app.get('/api/items', (req, res) => {
    res.send('Sending a list of items FROM the DB ...')
})
app.post('/api/items', (req, res) => {
    res.status(201).send('Sent the new data TO the DB ...')
})


app.listen(5070, () => {
    console.log("Test : Server running on port 5070");
})

start()
async function start() {
    await connect(); 
const todos = await readTodos("SQL_Liste_generale");
    console.log('TEST2',todos)
}

async function connect() {
    try {
        await itemsPool.connect(); 
    }
    catch(e) {
        console.error(`Une erreur de connexion avec la base de données est survenue. ${e}`)
    }
}


app.get("/SQL_Liste_generale", async (req, res) => {
    const rows = await readTodos("SQL_Liste_generale");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


async function readTodos(table) {
    try {
        
     const results = await itemsPool.query("SELECT * FROM public." + table );
    return results.rows;
   
    }
    catch(e){
        return [];
    }
}

