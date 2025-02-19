
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
    res.send('Test : OUTIL ECOTOX14 : Simple API homepage');
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




//--------------------------- importation données

app.get("/table_ADORE_algues", async (req, res) => {
    const rows = await readTodos("table_ADORE_algues");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_ADORE_poissons", async (req, res) => {
    const rows = await readTodos("table_ADORE_poissons");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/table_ADORE_invertebres", async (req, res) => {
    const rows = await readTodos("table_ADORE_invertebres");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_eau", async (req, res) => {
    const rows = await readTodos("table_eau");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_crinote", async (req, res) => {
    const rows = await readTodos("table_crinote");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_criref", async (req, res) => {
    const rows = await readTodos("table_criref");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/table_notes", async (req, res) => {
    const rows = await readTodos("table_notes");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_refer", async (req, res) => {
    const rows = await readTodos("table_refer");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})




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

