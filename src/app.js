const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

//Routes
const cursoRoute = require('./routes/curso.route')
const materiaRoute = require('./routes/materia.route')
const profesorRoute = require('./routes/profesor.route')
const carrerasRoute = require('./routes/carrera.route')

//Models
const db = require('./db/models')

//Test data => Esto es para importar los datos de prueba
const cursoTestData = require('./data/curso.testData.json')
const materiasTestData = require('./data/materia.testData.json')
const carreraTestData = require("./data/carrrera.testData.json")
const profesorTestData = require('./data/profesor.testData.json')
const curso_profesorTestData = require('./data/curso_profesor.testData.json')


//Inicializar app
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Usar rutas
app.use(cursoRoute)
app.use(materiaRoute)
app.use(profesorRoute)
app.use(carrerasRoute)

const port = process.env.PORT || 3001
app.listen(port, async(req, res)=>{
    try
    {
    //Esto verifica si me pude conectar bien a la base de datos
    await db.sequelize.authenticate()

    // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
    // porque borra todas las tablas y las vueve a crear
    await db.sequelize.sync({force:true});

    //Esto es para cargar datos de prueba
    carreraTestData.map(carrera => db.carrera.create(carrera))
    materiasTestData.map( materia => db.Materia.create(materia))
    profesorTestData.map( profe => db.Profesor.create(profe))
    cursoTestData.map( curso => db.Curso.create(curso))
    curso_profesorTestData.map( cursoProf => db.Curso_Profesor.create(cursoProf))

    console.log(`Servidor en el puerto ${port}`)
    } 
    catch(error){
        console.log("Error: "+error)
    }


})