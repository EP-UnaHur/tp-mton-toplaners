const Joi = require('joi')

const clienteSchema = Joi.object.keys({
    nombre: Joi.string().required().min(3).max(15).messages({
        "string.min": `Nombre debe tener al menos {#limit} caracteres`,
        "string.max": `Nombre debe tener como máximo {#limit} caracteres`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido" 
    }),
    cuatrimestral: Joi.number().required().messages({
        "number.empty": "El campo cuatrimestral no puede estar vacío",
        "any.required": "El campo cuatrimestral es obligatorio"
    }),
    anio: Joi.number().required().messages({
        "number.empty": "El campo anio no puede estar vacío",
        "any.required": "El campo anio es obligatorio"
    })
})