const { where } = require("sequelize")
const {Materia, Carrera} = require("../db/models")
const { includes } = require("lodash")

const controllerCarrera = {}

const getAllCarreras = async (req,res) => {
    res.status(200).json(await Carrera.findAll({}))
}

controllerCarrera.getAllCarreras = getAllCarreras

const getCarreraById = async (req,res) => {
    const id = req.params.id 
    res.status(200).json(await Carrera.findOne({where:{id}}))
}
controllerCarrera.getCarreraById = getCarreraById


const getMateriasInCarrera = async (req, res) => {
    const carreraId = req.params.id 
    const materiasDeCarrera = await Carrera.findOne({
        where : {id:carreraId},
        include :[
            {
                model: Materia,
                as:"materias"
            }
        ]
    }
    )
    res.status(200).json(materiasDeCarrera)
}
controllerCarrera.getMateriasInCarrera = getMateriasInCarrera

const createCarrera = async (req,res) => {
    const carrera = req.body
    const nuevaCarrera = await Carrera.create(carrera)
    res.status(201).json(nuevaCarrera)
}
controllerCarrera.createCarrera = createCarrera

const createMateriaInCarrera = async (req,res) =>{
    const carreraId = req.params.id 
    const carrera = await Carrera.findByPk(carreraId)
    const materia = req.body
    const nuevaMateria = await Materia.create({id_carrera: carrera.id, ...materia})
    res.status(201).json(nuevaMateria)
}

controllerCarrera.createMateriaInCarrera = createMateriaInCarrera





module.exports = controllerCarrera

























