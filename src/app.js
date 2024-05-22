const express = require('express')

//Routes
const cursoRoute = require('./routes/curso.route')

//Models
const db = require('./db/models')

//Test data => Esto es para importar los datos de prueba
const cursoTestData = require('./data/curso.testData.json')

const app = express()
app.use(cursoRoute)

app.listen(3000, async(req, res)=>{
    try
    {
    //Esto verifica si me pude conectar bien a la base de datos
    await db.sequelize.authenticate()

    // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
    // porque borra todas las tablas y las vueve a crear
    await db.sequelize.sync({force:true});

    //Esto es para cargar datos de prueba
    cursoTestData.map( curso => db.Curso.create(curso))


    console.log("Listen on 3000")
    } 
    catch(error){
        console.log("Error: "+error)
    }


})