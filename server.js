
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



//--------------------------- tables de l'outil
//----------------------------------------------------------------------

app.get("/SQL_Liste_substances", async (req, res) => {
    const rows = await readTodos("SQL_Liste_substances");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/SQL_Liste_generale", async (req, res) => {
    const rows = await readTodos("SQL_Liste_generale");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})



app.get("/SQL_toxicite_invertebres_aquatiques_COMPO", async (req, res) => {
    const rows = await readTodos("SQL_toxicite_invertebres_aquatiques_COMPO");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/SQL_toxicite_poissons_COMPO", async (req, res) => {
    const rows = await readTodos("SQL_toxicite_poissons_COMPO");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/SQL_criteres_de_qualite_sediments", async (req, res) => {
    const rows = await readTodos("SQL_criteres_de_qualite_sediments");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/table_ecotoxDataset_result", async (req, res) => {
    const rows = await readTodos("table_ecotoxDataset_result");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/table_ecotoxDataset_test", async (req, res) => {
    const rows = await readTodos("table_ecotoxDataset_test");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/table_ecotoxdataset_species", async (req, res) => {
    const rows = await readTodos("table_ecotoxdataset_species");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})




//---------------COMPOSES

app.get("/SQL_proprites_physiques_et_chimiques_composes", async (req, res) => {
    const rows = await readTodos("SQL_proprites_physiques_et_chimiques_composes");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_criteres_de_qualite_eaux", async (req, res) => {
    const rows = await readTodos("SQL_criteres_de_qualite_eaux");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.get("/SQL_criteres_de_qualite_sols", async (req, res) => {
    const rows = await readTodos("SQL_criteres_de_qualite_sols");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_ecotox_compose_organismes_aquatiques", async (req, res) => {
    const rows = await readTodos("SQL_ecotox_compose_organismes_aquatiques");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_ecotox_compose_organisme_terrestre", async (req, res) => {
    const rows = await readTodos("SQL_ecotox_compose_organisme_terrestre");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/import_ecotox", async (req, res) => {
    const rows = await readTodos("import_ecotox");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


//---------------SUBSTANCES

//----------------------------------------------------------------------------------------------

app.get("/SQL_composition_substances", async (req, res) => {
    const rows = await readTodos("SQL_composition_substances");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_Propriete_physique_et_chimique_substance", async (req, res) => {
    const rows = await readTodos("SQL_Propriete_physique_et_chimique_substance");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_ecotox_substances_organismes_aquatiques", async (req, res) => {
    const rows = await readTodos("SQL_ecotox_substances_organismes_aquatiques");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})


app.get("/SQL_ecotox_substances_organisme_terrestre", async (req, res) => {
    const rows = await readTodos("SQL_ecotox_substances_organisme_terrestre");
    res.setHeader("content-type", "application/json")  
    res.send(JSON.stringify(rows)) 
    
})

app.post("/todos", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        result.success = await createTodo(reqJson.todo, reqJson.table)
    }
    catch(e){
        result.success= "Échec de l'insertion (méthode POST)";
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.post("/suppression", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body
        console.log("req suppression : ", reqJson.table, reqJson.supprimer)

        result.success = await  deleteTodo(reqJson.table, reqJson.supprimer)
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.post("/modification", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        console.log("req modification : ", reqJson.table, reqJson.old, reqJson.new)

        result.success = await updateTodos(reqJson.table, reqJson.old, reqJson.new)
    }
    catch(e){
        result.success= "Échec de la modification (serveur)";
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


async function updateTodos(table_sql, ancient_objet, nouvel_objet ){



    Liste = Object.keys(ancient_objet).map((key) => [key, ancient_objet[key]])
    colonnes = Object.keys(ancient_objet).map((key) => [key])
    valeurs = Object.keys(ancient_objet).map((key) => [ancient_objet[key]])

    console.log(colonnes)
    console.log(valeurs)
    nombre_de_colonnes = Liste.length
    
     //- Creer le filtre avec l'ancient objet
     filtre = " WHERE "
     i = 1
     Liste.forEach(element =>{  
        
        if (i === nombre_de_colonnes){
         filtre = filtre + element[0]  +" = "+ "'" + element[1] + "'"+ " "

        }
        if (i !== nombre_de_colonnes){ filtre = filtre + element[0] + " = "+ "'"+ element[1] +"'"+ " AND "

        }

        i = i + 1
    
    } )


     //- Creer le changement avec le nouvel objet

     Liste_2 = Object.keys(nouvel_objet).map((key) => [key, nouvel_objet[key]])
     colonnes_2 = Object.keys(nouvel_objet).map((key) => [key])
     valeurs_2 = Object.keys(nouvel_objet).map((key) => [nouvel_objet[key]])
     nombre_de_colonnes2 = Liste_2.length
     changement = " "
     i = 1
     Liste_2.forEach(element => {
        
        if (i === nombre_de_colonnes2){changement = changement + element[0] +" ="+"'"+ element[1]+"'"+" "}
        
        
        if (i !== nombre_de_colonnes2){changement = changement + element[0] +" ="+"'"+ element[1]+"'"+", "}
        i = i + 1
     } ) 

        //changement = " nom ='Camarche4', cas = '00-152' "
        console.log(changement)
        requete_finale = "update " + table_sql  + " set" + changement + filtre
        console.log("requete finale de modification est : ", requete_finale)

     try { 
        await itemsPool.query(requete_finale);
        return true
       
      }
      catch(e){
          return "Échec du test";
      }
        


    
}



async function readTodos(table) {
    try {
        
     const results = await itemsPool.query("SELECT * FROM public." + table );
    return results.rows;
   
    }
    catch(e){
        return [];
    }
}


async function createTodo(listetodos, table){
    //------------------- Fonction pour générer une requête SQL "Insert" en chaînes de caractères ------------------
    objet = listetodos
    console.log("objet en cous de traitement", objet)
    
    Liste = Object.keys(objet).map((key) => [key, objet[key]])
    nombre_de_colonnes = Liste.length

    chiffre = '('

    for(let i = 1; i <= nombre_de_colonnes; i ++) {
    
        if (i !== nombre_de_colonnes){
            chiffre = chiffre + "$" + i + ","
        }
        console.log(chiffre)
    
        if (i === nombre_de_colonnes){
            chiffre = chiffre + "$" + nombre_de_colonnes + ")"
            console.log("Finale : ", chiffre)
            break
        }}

        Requête_sql = "insert into " + table + " values"+ chiffre

   

//---------------------------------------------------------------------------------------------------------

    try {
        await itemsPool.query(Requête_sql, Object.values(listetodos));
        return true
        }
        catch(e){
            return "échec de l'insertion"
        }

}

async function deleteTodo(table_sql, objet_à_supprimer){
    
    try {

        objet = objet_à_supprimer
        colonnes = Object.keys(objet).map((key) => [key])
        nombre_de_colonnes = colonnes.length

        req = "delete from table_35 where nom = $1 and cas = $2 and vafe = $3 and cvaa = $4 and cvac = $5" 
        arg = ["niobium", "36546", "45", "23", "13"]

        Requête_sql = "delete from " + table_sql + " where "
        i = 1
        colonnes.forEach(element =>{  
        
            if (i === nombre_de_colonnes){
                Requête_sql = Requête_sql + element  +" = "+ "$"+ i 
    
            }
            if (i !== nombre_de_colonnes){ Requête_sql = Requête_sql + element  +" = "+ "$"+ i + " and "
    
            }
    
            i = i + 1
        
        } )

        console.log("requet SQL de suppression finale : ", Requête_sql, Object.values(objet))
        await itemsPool.query(Requête_sql, Object.values(objet))
        return true
        }
        catch(e){
            return "Échec de la supression (serveur)";
        }
}


