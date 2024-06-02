const _ = require('lodash')

const existsById = (Model) => {
    return async(req, res, next) =>{
        const id = req.params.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia)
            res.status(404).json(`${modelName} con id ${id} no existe`)
        else
            next()
    }
}

const validateSchema = (schema) => {
    return  async (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error) {
            return res.status(400).json(
                {
                    errores : result.error.details.map( error=> ( {
                        error: error.message
                    })
                )}  
            )
        }
        next()
    }
}

const existsIdInOtherModel = (Model, ModelToCheck, fk) => {
    return async (req, res, next) => {
        const idToFind = req.params.id
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        const ModelToCheckName = ModelToCheck.modelName || (ModelToCheck.options.name && ModelToCheck.options.name.singular);
        const rowsToCheck = await ModelToCheck.findAll({where: {[fk]: idToFind}})
        if (rowsToCheck.length > 0)
           return res.status(500).json(`El ${modelName} con id ${idToFind} tiene relación con otro registro de ${ModelToCheckName} en la base de datos y no se puede borrar`)
        next()
    }
}

module.exports = {existsById, validateSchema, existsIdInOtherModel}