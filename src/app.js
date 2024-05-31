const express = require('express')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')
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

//Configuración de base de datos
const dataBaseURL = process.env.DATABASE_URL || 'sqlite::memory:'
const sequelize = new Sequelize(dataBaseURL)


//Usar rutas
app.use(cursoRoute)
app.use(materiaRoute)
app.use(profesorRoute)
app.use(carrerasRoute)

const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  
  app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });

sequelize.sync().then(() => {
    app.listen(3000, async(req, res)=>{
        try
        {
        //Esto verifica si me pude conectar bien a la base de datos
        //await dataBaseURL.sequelize.authenticate()
    
        // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
        // porque borra todas las tablas y las vueve a crear
        //await dataBaseURL.sequelize.sync({force:true});
    
        //Esto es para cargar datos de prueba
        carreraTestData.map(carrera => db.carrera.create(carrera))
        materiasTestData.map( materia => db.Materia.create(materia))
        profesorTestData.map( profe => db.Profesor.create(profe))
        cursoTestData.map( curso => db.Curso.create(curso))
        curso_profesorTestData.map( cursoProf => db.Curso_Profesor.create(cursoProf))
    
        console.log("Listen on 3000")
        } 
        catch(error){
            console.log("Error: "+error)
        }
    
    
    })
})
