const _ = require('lodash')

const existsById = (Model) => {
    return async(req, res, next) =>{
        const id = req.params.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia){
            res.status(404).json(`El ${modelName} con id ${id} no existe`)
        }
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

const existsRowInOtherModel = (RowModel, ModelToCheck) => {
    return async (req, res, next) => {
        const id = req.params.id
        const row = await RowModel.findByPk(id)
        const rowsToCheck = await ModelToCheck.findAll({})
        if (rowsToCheck.some(_.isEqual.bind(null, row)))
           return res.status(500).json(`El ${modelName} con id ${id} tiene relación con otro registro en la base de datos`)
        next()
    }
}

module.exports = {existsById, validateSchema, existsRowInOtherModel}