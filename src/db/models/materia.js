'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      
      Materia.hasMany(models.Curso, {
        as: 'cursos',
        foreignKey: 'id_materia'
      })
      
      Materia.belongsTo(models.carrera, {
        as: 'carrera',
        foreignKey: 'id_carrera'
      })
      
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.NUMBER,
    anio: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false
  });
  return Materia;
};