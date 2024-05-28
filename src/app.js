const express = require('express')
const bodyParser = require('body-parser')

//Routes
const cursoRoute = require('./routes/curso.route')
const materiaRoute = require('./routes/materia.route') //agregado
const profesorRoute = require('./routes/profesor.route')
const carrerasRoute = require('./routes/carrera.route')

//Models
const db = require('./db/models')

//Test data => Esto es para importar los datos de prueba
const cursoTestData = require('./data/curso.testData.json')
const materiasTestData = require('./data/materia.testData.json') //agregado
const carreraTestData = require("./data/carrrera.testData.json")

//Inicializar app
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Usar rutas
app.use(cursoRoute)
app.use(materiaRoute)
//app.use(profesorRoute) comentado hasta que agregue bien la funcionalidad xd nacho
app.use(carrerasRoute)
//agregado


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
    materiasTestData.map( materia => db.Materia.create(materia)) //agregado
    carreraTestData.map(carrera => db.carrera.create(carrera))



    console.log("Listen on 3000")
    } 
    catch(error){
        console.log("Error: "+error)
    }


})