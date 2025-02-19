const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBConfigLink + "?sslmode=require",
})
itemsPool.connect((err)=> {
    if (err) throw err
    console.log("La connexion à Postgresql est un succès !")
})

module.exports = itemsPool;
