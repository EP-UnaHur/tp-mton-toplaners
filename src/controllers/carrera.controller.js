const {Materia, carrera} = require("../db/models")

const controllerCarrera = {}

const getAllCarreras = async (req,res) => {
    res.status(200).json(await carrera.findAll({}))
}

controllerCarrera.getAllCarreras = getAllCarreras

const getCarreraById = async (req,res) => {
    const carreraId = req.params.id 
    res.status(200).json(await carrera.findByPk(carredaId))
}
controllerCarrera.getCarreraById = getCarreraById


const getMateriasInCarrera = async (req, res) => {
    const carreraId = req.params.id 
    const materiasDeCarrera = await carrera.findOne({
        where : {id:carreraId},
        include :[
            {
                model: Materia,
                as:"Materias"
            }
        ]
    }
    )
    res.status(200).json(materiasDeCarrera)
}
controllerCarrera.getMateriasInCarrera = getMateriasInCarrera

const createCarrera = async (req,res) => {
    const carrera = req.body
    const nuevaCarrera = await carrera.create(carrera)
    res.status(201).json(nuevaCarrera)
}
controllerCarrera.createCarrera = createCarrera

const createMateriaInCarrera = async (req,res) =>{
    const carreraId = req.params.id 
    const carrera = await carrera.findByPk(carreraId)
    const materia = req.body
    const nuevaMateria = Materia.create({id_carrera: carrera.id, ...materia})
    res.status(201).json(nuevaMateria)
}
controllerCarrera.createMateriaInCarrera = createMateriaInCarrera





module.exports = controllerCarrera

























