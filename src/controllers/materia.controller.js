const {Materia} = require('../db/models')

const controller = {}

const getAllMaterias = async (req, res) => {
    res.status(200).json(await Materia.findAll({}))
}
controller.getAllMaterias = getAllMaterias;

const materiaById = async (req, res) => {
    const id = req.params.id
    res.status(200).json(await Materia.findByPk(id))
}
controller.materiaById = materiaById;

